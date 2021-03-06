// Generated by CoffeeScript 1.3.1
var jQueryRequestAdapter;

jQueryRequestAdapter = (function() {

  jQueryRequestAdapter.name = 'jQueryRequestAdapter';

  function jQueryRequestAdapter() {}

  jQueryRequestAdapter.prototype.request = function(options, callback) {
    var key;
    if (options.method === 'GET') {
      for (key in options.form) {
        if (options.qs[key] && options.qs[key] === options.form[key]) {
          delete options.qs[key];
        }
      }
    }
    return $.ajax({
      url: "" + options.url + "?" + ($.param(options.qs)),
      data: options.form,
      type: options.method,
      headers: options.headers,
      complete: function(xhr) {
        return callback(false, {
          statusCode: xhr.status,
          body: xhr.responseText
        }, xhr.responseText);
      }
    });
  };

  return jQueryRequestAdapter;

})();
