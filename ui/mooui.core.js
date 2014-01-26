/*
 * mooui
 * https://github.com/puras/mooui
 * http://mooui.mooko.net
 *
 * Copyright (c) 2014 puras
 * Licensed under the MIT license.
 *
 * http://mooui.mooko.net/core
 * Depends:
 *      none
 */
"use strict";

(function($, undefined) {
    $.mooui = $.mooui || {};

    $.extend($.mooui, {
        version: "0.1.0",

        keyCode: {
            BACKSPACE: 8
        }
    });

    $.mooui = function(name, base, prototype) {
        console.log('mooui');
    };
} (jQuery));