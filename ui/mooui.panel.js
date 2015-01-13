/**
 * @fileOverview MooUI Panel
 *
 * @namespace $.mooui.panel
 *
 * @description
 * MooUI Panel<br />
 * 面板组件类<br />
 *
 * @requires mooui.core.js
 *
 * @see http://mooui.mooko.net/panel
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

    $.moo('mooui.panel', {
        default_element: '<div>',
        options: {
            /**
             * @name $.mooui.panel#title
             * @desc 面板的标题
             */
            title: false,
            footer: false,
            content: false,
            icon: false,
            width: false,
            height: false,
            type: 'panel-default'
        },
        /**
         * @name $.mooui.panel#_init
         * @function
         * @private
         * @description 面板的初始化方法
         */
        _init: function() {
            console.log(this.element.attr('id'));
            this.element.addClass('panel-body');
            this.element.wrap($('<div></div>'));
            this.panel = this.element.parent();
            this.panel.addClass('panel');


            if (this.options.width) this.panel.css('width', this.options.width);
            this.element.css('overflow', 'auto');
            // this.element.css('padding', '1px');
        },
        /**
         * @name $.mooui.panel#_create
         * @function
         * @private
         * @description 面板的创建方法
         */
        _create: function() {
            // 增加panel的类型样式
            this.panel.addClass(this.options.type);
            this.height = this.options.height;

            if (this.options.title) {
                this.title = $('<div></div>');
                this.title.addClass('panel-heading');
                this.title.text(' ' + this.options.title);
                this.panel.prepend(this.title);
                this.height = this.height - this.title.outerHeight();
            }

            if (this.options.footer) {
                this.footer = $('<div></div>');
                this.footer.addClass('panel-footer');
                this.footer.text(' ' + this.options.footer);
                this.panel.append(this.footer);
                this.height = this.height - this.footer.outerHeight();
            }

            if (this.options.content) {
                this.element.html(this.options.content);
            }

            if (this.options.icon) {
                this.icon = $('<span></span>');
                this.icon.addClass('glyphicon');
                this.icon.addClass(this.options.icon);
                this.icon.after('&nbsp;');
                this.title.prepend(this.icon);
            }
            if (this.options.height) this.element.css('height', this.height);
        }
    });
} (jQuery));