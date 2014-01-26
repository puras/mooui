/*
 * mooui
 * https://github.com/puras/mooui
 * http://mooui.mooko.net
 *
 * Copyright (c) 2014 puras
 * Licensed under the MIT license.
 *
 * http://mooui.mooko.net/button
 * Depends:
 *      mooui.core.js
 */
(function($, undefined) {
"use strict";

    $.moo('mooui.mbutton', {
        default_element: '<button>',
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
        },

        reload: function() {
        }
    });
} (jQuery));