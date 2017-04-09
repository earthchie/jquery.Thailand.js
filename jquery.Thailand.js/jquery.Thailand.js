/**
 * @name jquery.Thailand.js
 * @version 1.2.0
 * @update Apr 10, 2017
 * @website https://github.com/earthchie/jquery.Thailand.js
 * @license WTFPL v.2 - http://www.wtfpl.net/
 *
 * @dependency: jQuery <https://jquery.com/>
 *              typehead.js <https://twitter.github.io/typeahead.js/>
 *              JQL.js <https://github.com/earthchie/JQL.js>
 **/

$.Thailand = function (options) {
    'use strict';

    options = $.extend({

        database: './data3.json',
        autocomplete_size: 20,
        onComplete: function () {},

        $district: $('[name="district"]'),
        $amphoe: $('[name="amphoe"]'),
        $province: $('[name="province"]'),
        $zipcode: $('[name="zipcode"]')

    }, options);

    // get zip binary
    $.getJSON(options.database, function (json) {
        var DB = new JQL(preprocess(json)), // make json query-able
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
    })
        .fail(function (err) {
            throw new Error('Error: File "'+options.database+'" is not exists.');
        });

    function preprocess (data) {
        var lookup = []
        var words = []
        var useLookup = false
        if (data.lookup && data.words) {
          // compact with dictionary and lookup
          useLookup = true
          lookup = data.lookup.split('|')
          words = data.words.split('|')
          data = data.data
        }
        function t(text) {
          function repl(m) {
            var ch = m.charCodeAt(0)
            return words[ch < 97 ? ch - 65 : 26 + ch - 97]
          }
          if (!useLookup) {
            return text
          }
          if (typeof text === 'number') {
            text = lookup[text]
          }
          return text.replace(/[A-Z]/ig, repl)
        }

        if (!data[0].length) {
            // non-compacted database
            return data;
        }
        // compacted database in hierarchical form of:
        // [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
        var expanded = [ ];
        data.forEach(function (provinceEntry) {
            var province = provinceEntry[0];
            var amphurList = provinceEntry[1];
            amphurList.forEach(function (amphurEntry) {
                var amphur = amphurEntry[0];
                var districtList = amphurEntry[1];
                districtList.forEach(function (districtEntry) {
                    var district = districtEntry[0];
                    var zipCodeList = districtEntry[1] instanceof Array ? districtEntry[1] : [districtEntry[1]];
                    zipCodeList.forEach(function (zipCode) {
                        expanded.push({
                            d: t(district),
                            a: t(amphur),
                            p: t(province),
                            z: zipCode
                        });
                    });
                });
            });
        });
        return expanded;
    }
};
