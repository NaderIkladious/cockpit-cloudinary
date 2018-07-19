App.Utils.renderer.cloudinary = function(v) {
  return Array.isArray(v)
    ? '<span class="uk-badge">' + (v.length + ' ' + App.i18n.get(v.length == 1 ? 'Image' : 'Images')) + '</span>'
    : App.Utils.renderer.default(v);
};
