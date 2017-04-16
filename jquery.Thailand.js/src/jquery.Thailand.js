/**
 * @name jquery.Thailand.js
 * @version 1.3.1
 * @update Apr 16, 2017
 * @website https://github.com/earthchie/jquery.Thailand.js
 * @license WTFPL v.2 - http://www.wtfpl.net/
 *
 * @dependency: jQuery <https://jquery.com/>
 *              typeahead.js <https://twitter.github.io/typeahead.js/>
 *              JQL.js <https://github.com/earthchie/JQL.js>
 **/

$.Thailand = function (options) {
    'use strict';

    options = $.extend({

        database: './db.json',
        autocomplete_size: 20,

        onLoad: function () {},
        onDataFill: function () {},

        $district: false,
        $amphoe: false,
        $province: false,
        $zipcode: false,
        $search: false

    }, options);

    // author dtinth <https://github.com/dtinth/>
    var preprocess = function (data) {

        if (!data[0].length) {
            // non-compacted database
            return data;
        }
        // compacted database in hierarchical form of:
        // [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
        var expanded = [];
        data.forEach(function (provinceEntry) {
            var province = provinceEntry[0];
            var amphurList = provinceEntry[1];
            amphurList.forEach(function (amphurEntry) {
                var amphur = amphurEntry[0];
                var districtList = amphurEntry[1];
                districtList.forEach(function (districtEntry) {
                    var district = districtEntry[0];
                    var zipCodeList = districtEntry[1];
                    zipCodeList.forEach(function (zipCode) {
                        expanded.push({
                            d: district,
                            a: amphur,
                            p: province,
                            z: zipCode
                        });
                    });
                });
            });
        });
        return expanded;
    };
    
    // get zip binary
    $.getJSON(options.database, function (json) {
        var DB = new JQL(preprocess(json)), // make json query-able
            typehead_options = {
                hint: true,
                highlight: true,
                minLength: 1
            },
            templates = { // template of autocomplete choices
                empty: ' ',
                suggestion: function (data) {
                    return '<div>' + data.d + ' » ' + data.a + ' » ' + data.p + ' » ' + (data.z || '<i>ไม่มีรหัสไปรษณีย์</i>') + '</div>';
                }
            },
            autocomplete_handler = function (e, v) { // set value when user selected autocomplete choice

                if(options.$district){
                    options.$district.val(v.d).trigger('change');
                }
                if(options.$amphoe){
                    options.$amphoe.val(v.a).trigger('change');
                }
                if(options.$province){
                    options.$province.val(v.p).trigger('change');
                }
                if(options.$zipcode){
                    options.$zipcode.val(v.z).trigger('change');
                }

                if(typeof options.onDataFill === 'function'){
                    options.onDataFill({
                        district: v.d,
                        amphoe: v.a,
                        province: v.p,
                        zipcode: v.z
                    });
                }
                
            };

        // init auto complete for district
        if(options.$district){
            options.$district.typeahead(typehead_options, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function (str, callback) {
                    var possibles = [];
                    try {
                        possibles = DB.select('*').where('d').match('^' + str).orderBy('d').fetch();
                    } catch (e) {}
                    callback(possibles);
                },
                display: function (data) {
                    return data.d;
                }
            });
        }

        // init auto complete for amphoe
        if(options.$amphoe){
            options.$amphoe.typeahead(typehead_options, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function (str, callback) {
                    var possibles = [];
                    try {
                        possibles = DB.select('*').where('a').match('^' + str).orderBy('a').fetch();
                    } catch (e) {}
                    callback(possibles);
                },
                display: function (data) {
                    return data.a;
                }
            });
        }

        // init auto complete for province
        if(options.$province){
            options.$province.typeahead(typehead_options, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function(str, callback) {
                    var possibles = [];
                    try {
                        possibles = DB.select('*').where('p').match('^' + str).orderBy('p').fetch();
                    } catch (e) {}
                    callback(possibles);
                },
                display: function (data) {
                    return data.p;
                }
            });
        }
            

        // init auto complete for zipcode
        if(options.$zipcode){
            options.$zipcode.typeahead(typehead_options, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function(str, callback) {
                    var possibles = [];
                    try {
                        possibles = DB.select('*').where('z').match('^' + str).orderBy('z').fetch();
                    } catch (e) {}
                    callback(possibles);
                },
                display: function (data) {
                    return data.z;
                }
            });
        }

        if(options.$search){
            options.$search.typeahead(typehead_options, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function (str, callback) {
                    var possibles = [], i;
                    try {
                        possibles = new JQL(possibles
                                    .concat(DB.select('*').where('a').match('^' + str).fetch())
                                    .concat(DB.select('*').where('d').match('^' + str).fetch())
                                    .concat(DB.select('*').where('p').match('^' + str).fetch())
                                    .concat(DB.select('*').where('z').match('^' + str).fetch())
                                    .filter(function(self, index, parent){ // remove duplicated data
                                        var isUnique = true
                                        for(i = 0; i < parent.length; i++){
                                            if(index !== i && parent[i].a == self.d && parent[i].d === self.d){
                                                isUnique = false;
                                            }
                                        }
                                        return isUnique;
                                    })).select('*').orderBy('a').fetch();
                    } catch (e) {}

                    callback(possibles);
                },
                display: function (data) {
                    return '';
                }
            });
        }
        
        // on autocomplete
        if(options.$district){
            options.$district.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
        }
        if(options.$amphoe){
            options.$amphoe.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
        }
        if(options.$province){
            options.$province.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
        }
        if(options.$zipcode){
            options.$zipcode.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
        }
        if(options.$search){
            options.$search.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
        }

        // callback
        if (typeof options.onLoad === 'function') {
            options.onLoad();
        }

        // callback, fallback version 1.2.
        if (typeof options.onComplete === 'function') {
            options.onComplete();
        }

    })
    .fail(function (err) {
        throw new Error('File "' + options.database + '" is not exists.');
    });

};