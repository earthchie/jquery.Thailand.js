/**
 * @name jquery.Thailand.js
 * @version 1.0.2
 * @update Apr 8, 2017
 * @website https://github.com/earthchie/jquery.Thailand.js
 * @author Earthchie http://www.earthchie.com/
 * @license WTFPL v.2 - http://www.wtfpl.net/
 *
 * @dependency: jQuery <https://jquery.com/>
 *              JSZIP <https://stuk.github.io/jszip/>
 *              typehead.js <https://twitter.github.io/typeahead.js/>
 *              JQL.js <https://github.com/earthchie/JQL.js>
 **/

$.Thailand = function (options) {
    'use strict';
    
    options = $.extend({
        
        database: './db.zip',
        autocomplete_size: 20,
        onComplete: function () {},
        
        $district: $('[name="district"]'),
        $amphoe: $('[name="amphoe"]'),
        $province: $('[name="province"]'),
        $zipcode: $('[name="zipcode"]')
        
    }, options);
    
    // get zip binary
    JSZipUtils.getBinaryContent(options.database, function (err, data) {
        
        if (err) {
            throw 'Error: File "'+options.database+'" is not exists.'
        }else{
            // read zip
            JSZip.loadAsync(data).then(function (zip) {

                // unzip db.json then parse into string
                zip.file('db.json').async('string').then(function (json) {

                    var DB = new JQL(json), // make json query-able
                        typehead_options = {
                            hint: true,
                            highlight: true,
                            minLength: 0
                        },
                        templates =  { // template of autocomplete choices
                            empty: ' ',
                            suggestion: function (data) {
                                return '<div>' + data.d + ' » ' + data.a + ' » ' + data.p + ' » ' + (data.z || '<i>ไม่มีรหัสไปรษณีย์</i>') + '</div>';
                            }
                        },
                        autocomplete_handler = function (e, v) { // set value when user selected autocomplete choice
                            options.$district.val(v.d);
                            options.$amphoe.val(v.a);
                            options.$province.val(v.p);
                            options.$zipcode.val(v.z);
                        };

                    // init auto complete for district
                    options.$district.typeahead(typehead_options, {
                        limit: options.autocomplete_size,
                        templates: templates,
                        source: (function (str) {

                            return function filter(str, callback) {
                                var possibles = [];
                                try {
                                    possibles = DB.select('*').where('d').match('^' + str).orderBy('d').fetch();
                                } catch (e) {}
                                callback(possibles);
                            };

                        }()),
                        display: function (data) {
                            return data.d;
                        }
                    });

                    // init auto complete for amphoe
                    options.$amphoe.typeahead(typehead_options, {
                        limit: options.autocomplete_size,
                        templates: templates,
                        source: (function (str) {

                            return function filter(str, callback) {
                                var possibles = [];
                                try {
                                    possibles = DB.select('*').where('a').match('^' + str).orderBy('a').fetch();
                                } catch (e) {}
                                callback(possibles);
                            };

                        }()),
                        display: function (data) {
                            return data.a;
                        }
                    });

                    // init auto complete for province
                    options.$province.typeahead(typehead_options, {
                        limit: options.autocomplete_size,
                        templates: templates,
                        source: (function (str) {

                            return function filter(str, callback) {
                                var possibles = [];
                                try {
                                    possibles = DB.select('*').where('p').match('^' + str).orderBy('p').fetch();
                                } catch (e) {}
                                callback(possibles);
                            };

                        }()),
                        display: function (data) {
                            return data.p;
                        }
                    });

                    // init auto complete for zipcode
                    options.$zipcode.typeahead(typehead_options, {
                        limit: options.autocomplete_size,
                        templates: templates,
                        source: (function (str) {

                            return function filter(str, callback) {
                                var possibles = [];
                                try {
                                    possibles = DB.select('*').where('z').match('^' + str).orderBy('z').fetch();
                                } catch (e) {}
                                callback(possibles);
                            };

                        }()),
                        display: function (data) {
                            return data.z;
                        }
                    });

                    // on autocomplete
                    options.$district.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
                    options.$amphoe.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
                    options.$province.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);
                    options.$zipcode.bind('typeahead:select typeahead:autocomplete', autocomplete_handler);

                    // callback
                    if (typeof options.onComplete === 'function') {
                        options.onComplete();
                    }

                });
            });
        }
    });
};
