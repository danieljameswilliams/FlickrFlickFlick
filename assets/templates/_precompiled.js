(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['image-item'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"image__item\">\n  <div class=\"image__item-picture\">\n    <img src=\"http://lorempixel.com/g/400/200/\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.foo : stack1), depth0))
    + "\">\n  </div>\n  <div class=\"image__item-content\">\n    <strong>"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "</strong>\n  </div>\n</div>\n";
},"useData":true});
})();