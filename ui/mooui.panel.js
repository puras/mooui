/*
 * mooui
 * https://github.com/puras/mooui
 * http://mooui.mooko.net
 *
 * Copyright (c) 2014 puras
 * Licensed under the MIT license.
 *
 * http://mooui.mooko.net/panel
 * Depends:
 *      mooui.core.js
 */
(function($, undefined) {
"use strict";

    $.moo('mooui.panel', {
        default_element: '<div>',
        options: {
            title: true,
            content: true,
            icon: false,
            width: 'auto',
            height: 'auto'
        },
        _init: function() {
            console.log(this.element.attr('id'));
        },
        _create: function() {}
    });
} (jQuery));