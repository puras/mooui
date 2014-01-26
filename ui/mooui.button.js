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
"use strict";

(function($, undefined) {

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
            console.log('this is mbutton init method');
            console.log(this.element);
            console.log(this.options.disabled);
        },

        reload: function() {
            console.log('reload me');
        }
    });
} (jQuery));