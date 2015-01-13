/**
 * @fileOverview MooUI Core
 *
 * @namespace $.mooui.core
 *
 * @description
 * MooUI Core<br />
 * 组件核心类<br />
 *
 * @see http://mooui.mooko.net/core
 *
 * @copyright 
 * Copyright (c) 2014 puras <br />
 * Licensed under the MIT license.
 *
 * @version 0.1.0
 * @author puras
 */
(function($, undefined) {
"use strict";
    $.mooui = $.mooui || {};

    $.extend($.mooui, {
        version: "0.1.0",

        key_code: {
            BACKSPACE: 8
        }
    });

    $.moo = function(name, prototype) {
        var namespace = name.split('.')[0];
        name = name.split('.')[1];
        var full_name = namespace + '-' + name;

        $[namespace] = $[namespace] || {};
        var Constructor = $[namespace][name] = function(options, element) {
            if (!this._create_moo) {
                return new Constructor(options, element);
            }

            if (arguments.length) {
                this._create_moo(options, element);
            }
        };

        // var base_prototype = new $.Moo();

        // constructor.prototype = $.extend({}, base_prototype);

        $.fn[name] = function(options) {
            var is_method_call = typeof options === 'string';
            var args = Array.prototype.slice.call(arguments, 1);

            if (is_method_call) {
                var instance = $.data(this[0], full_name);
                return (instance ? instance[options].apply(instance, args) : undefined);
            }

            return this.each(function() {
                var instance = $.data(this, full_name);
                if (is_method_call && instance && $.isFunction(instance[options])) {
                    instance[options].apply(instance, args);
                } else if (!is_method_call) {
                    $.data(this, full_name, new Constructor(options, this));
                }
            });
        };

        Constructor.prototype = $.extend({}, $.Moo.prototype, prototype);
    };

    $.Moo = function() {};

    $.Moo.prototype = {
        moo_name: 'moo',
        default_element: '<div>',
        options: {
            disabled: false
        },

        _create_moo: function(options, element) {
            element = $(element || this.default_element || this)[0];

            this.element = $(element);

            this.options = $.extend({}, this.options, options);

            this._init();
            this._create();
        },

        _init: $.noop,
        _create: $.noop
    };
} (jQuery));