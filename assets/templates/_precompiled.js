(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['image-item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;
  return "<div class=\"image__item\">\n  <div class=\"image__item-picture\">\n    <img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.media : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\n  </div>\n  <div class=\"image__item-content\">\n    <strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</strong>\n    <p>Published: <time datetime=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.published : stack1), depth0))
    + "\">"
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.published : stack1), {"name":"formatDate","hash":{},"data":data})))
    + "</time>.</p>\n    <a href=\"https://www.flickr.com/photos/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.author_id : stack1), depth0))
    + "\">Photo author</a>\n    <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">View on flickr</a>\n  </div>\n</div>\n";
},"useData":true});
})();