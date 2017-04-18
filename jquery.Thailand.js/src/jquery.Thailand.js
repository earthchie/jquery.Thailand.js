/**
 * @name jquery.Thailand.js
 * @version 1.4.0
 * @update Apr 18, 2017
 * @website https://github.com/earthchie/jquery.Thailand.js
 * @license WTFPL v.2 - http://www.wtfpl.net/
 *
 * @dependencies: jQuery <https://jquery.com/>
 *              JSZIP <https://stuk.github.io/jszip/> (optional: for zip database_type only)
 *              typeahead.js <https://twitter.github.io/typeahead.js/>
 *              JQL.js <https://github.com/earthchie/JQL.js>
 **/

$.Thailand = function (options) {
    'use strict';

    options = $.extend({

        database: '../database/db.json',
        database_type: 'auto', // json or zip; any other value will be ignored and script will attempt to evaluate the type from file extension instead.
        autocomplete_size: 20,

        onLoad: function () {},
        onDataFill: function () {},

        $district: false,
        $amphoe: false,
        $province: false,
        $zipcode: false,
        $search: false

    }, options);

    var preprocess = function (data) {
            var lookup = [],
                words = [],
                expanded = [],
                useLookup = false,
                t;

            if (data.lookup && data.words) {
                // compact with dictionary and lookup
                useLookup = true;
                lookup = data.lookup.split('|');
                words = data.words.split('|');
                data = data.data;
            }

            t = function (text) {
                function repl(m) {
                    var ch = m.charCodeAt(0);
                    return words[ch < 97 ? ch - 65 : 26 + ch - 97];
                }
                if (!useLookup) {
                    return text;
                }
                if (typeof text === 'number') {
                    text = lookup[text];
                }
                return text.replace(/[A-Z]/ig, repl);
            };

            if (!data[0].length) {
                // non-compacted database
                return data;
            }
            // decompacted database in hierarchical form of:
            // [["province",[["amphur",[["district",["zip"...]]...]]...]]...]
            data.map(function (provinces) {
                provinces[1].map(function (amphoes) {
                    amphoes[1].map(function (districts) {
                        districts[1] = districts[1] instanceof Array ? districts[1] : [districts[1]];
                        districts[1].map(function (zipcode) {
                            expanded.push({
                                d: t(districts[0]),
                                a: t(amphoes[0]),
                                p: t(provinces[0]),
                                z: zipcode
                            });
                        });
                    });
                });
            });
            return expanded;
        },
        similar_text = function (first, second, percentage) {
            // compare 2 strings, return value of similarity compare to each other. more value = more similarity
            first += '';
            second += '';

            var pos1 = 0,
                pos2 = 0,
                max = 0,
                firstLength = first.length,
                secondLength = second.length,
                p,
                q,
                l,
                sum;

            for (p = 0; p < firstLength; p = p + 1) {
                for (q = 0; q < secondLength; q = q + 1) {
                    l = 0;
                    while ((p + l < firstLength) && (q + l < secondLength) && (first.charAt(p + l) === second.charAt(q + l))) {
                        l = l + 1;
                    }
                    if (l > max) {
                        max = l;
                        pos1 = p;
                        pos2 = q;
                    }
                }
            }

            sum = max;

            if (sum) {
                if (pos1 && pos2) {
                    sum += similar_text(first.substr(0, pos2), second.substr(0, pos2), false);
                }

                if ((pos1 + max < firstLength) && (pos2 + max < secondLength)) {
                    sum += similar_text(first.substr(pos1 + max, firstLength - pos1 - max), second.substr(pos2 + max, secondLength - pos2 - max), false);
                }
            }

            if (percentage === false) {
                return sum;
            } else {
                if (first === second) {
                    return 100;
                } else {
                    if (firstLength > secondLength) {
                        return Math.floor(sum / firstLength * 100);
                    } else {
                        return Math.floor(sum / secondLength * 100);
                    }
                }
            }
        },
        loadDB = function(callback){
            var type = options.database_type.toLowerCase();

            if (type !== 'json' && type !== 'zip') {
                type = options.database.split('.').pop(); // attempt to use file extension instead
            }

            switch (type) {

                case 'json': 

                    $.getJSON(options.database, function (json) {
                        callback(new JQL(preprocess(json)));
                    }).fail(function (err) {
                        throw new Error('File "' + options.database + '" is not exists.');
                    });
                    break;

                case 'zip': 

                    options.database_type = 'zip'; 
                    JSZipUtils.getBinaryContent(options.database, function (err, data) {
                        if (err) {
                            throw new Error('File "' + options.database + '" is not exists.');
                        } else {
                            // read zip
                            JSZip.loadAsync(data).then(function (zip) {
                                // unzip db.json then parse into string
                                zip.file('db.json').async('string').then(function (json) {
                                    callback(new JQL(preprocess(JSON.parse(json))))
                                });
                            });
                        }
                    });
                    break;

                default: 
                    throw new Error('Unknown database type: "' + options.database_type + '". Please define database_type explicitly (json or zip)');
            }

        };

    // get database
    loadDB(function (DB) {
        var typehead_options = {
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

                if (options.$district) {
                    options.$district.typeahead('val', v.d).trigger('change');
                }
                if (options.$amphoe) {
                    options.$amphoe.typeahead('val', v.a).trigger('change');
                }
                if (options.$province) {
                    options.$province.typeahead('val', v.p).trigger('change');
                }
                if (options.$zipcode) {
                    options.$zipcode.typeahead('val', v.z).trigger('change');
                }

                if (typeof options.onDataFill === 'function') {
                    options.onDataFill({
                        district: v.d,
                        amphoe: v.a,
                        province: v.p,
                        zipcode: v.z
                    });
                }

            };

        // init auto complete for district
        if (options.$district) {
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
        if (options.$amphoe) {
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
        if (options.$province) {
            options.$province.typeahead(typehead_options, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function (str, callback) {
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
        if (options.$zipcode) {
            options.$zipcode.typeahead(typehead_options, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function (str, callback) {
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

        if (options.$search) {
            options.$search.typeahead({
                hint: true,
                highlight: true,
                minLength: 2
            }, {
                limit: options.autocomplete_size,
                templates: templates,
                source: function (str, callback) {
                    var possibles = [],
                        i;
                    try {
                        possibles = new JQL(possibles
                            .concat(DB.select('*').where('d').match(str).fetch())
                            .concat(DB.select('*').where('a').match(str).fetch())
                            .concat(DB.select('*').where('p').match(str).fetch())
                            .concat(DB.select('*').where('z').match(str).fetch())
                            .filter(function (self, index, parent) { // remove duplicated data
                                for (i = 0; i < parent.length; i = i + 1) {
                                    if (index !== i && parent[i].a === self.d && parent[i].d === self.d) {
                                        return false;
                                    }
                                }
                                return true;
                            }).map(function (self) { // give a likely score, will use to sort data later
                                self.likely = [
                                    similar_text(str, self.d) * 5,
                                    similar_text(str, self.a.replace(/^เมือง/, '')) * 3,
                                    similar_text(str, self.p),
                                    similar_text(str, self.z)
                                ].reduce(function (a, b) {
                                    return Math.max(a, b);
                                });
                                return self;
                            })).select('*').orderBy('likely desc').fetch();
                    } catch (e) {}

                    callback(possibles);
                },
                
                display: function (data) {
                    return '';
                }
            });
        }

        // on autocomplete
        [options.$district, options.$amphoe, options.$province, options.$zipcode, options.$search].map(function ($$) {
            if ($$) {
                $$
                    .bind('typeahead:select typeahead:autocomplete', autocomplete_handler)
                    .blur(function () {
                        if (!this.value) {
                            $(this).parent().find('.tt-dataset').html('');
                        }
                    });
            }
        });

        // callback
        if (typeof options.onLoad === 'function') {
            options.onLoad();
        }

        // callback, fallback to version 1.2.
        if (typeof options.onComplete === 'function') {
            options.onComplete();
        }

    });
};