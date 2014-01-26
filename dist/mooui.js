/*! MooUI - v0.1.0 - 2014-01-02
* https://github.com/puras/mooui
* Copyright (c) 2014 puras; Licensed MIT */
/*! MooUI - v0.1.0 - 2014-01-02
* https://github.com/puras/mooui
* Copyright (c) 2014 puras; Licensed MIT 
    core
*/
/*! MooUI - v0.1.0 - 2014-01-02
* https://github.com/puras/mooui
* Copyright (c) 2014 puras; Licensed MIT 
    grid
*/
(function($) {

  // Collection method.
  $.fn.mooui = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.mooui = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.mooui.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.mooui.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].mooui = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
