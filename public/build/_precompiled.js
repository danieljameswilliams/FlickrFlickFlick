(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['image-item'] = template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <li class=\"tags__list-item\">\n          <a href=\"https://www.flickr.com/search/?q="
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"value","hash":{},"data":data}) : helper)))
    + "</a>\n        </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, buffer = "<div class=\"image__item\">\n  <div class=\"image__item-picture\">\n    <img src=\""
    + escapeExpression(lambda(((stack1 = ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.media : stack1)) != null ? stack1.m : stack1), depth0))
    + "\" alt=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "\">\n  </div>\n  <div class=\"image__item-content\">\n    <strong>\n      q"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.cid : stack1), depth0))
    + "w\n      e"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.id : stack1), depth0))
    + "a\n      s"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.title : stack1), depth0))
    + "d\n    </strong>\n    <p>Published: <time datetime=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.published : stack1), depth0))
    + "\">"
    + escapeExpression(((helpers.formatDate || (depth0 && depth0.formatDate) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.published : stack1), {"name":"formatDate","hash":{},"data":data})))
    + "</time>.</p>\n    <a href=\"https://www.flickr.com/photos/"
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.author_id : stack1), depth0))
    + "\">Photo author</a>\n    <a href=\""
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.link : stack1), depth0))
    + "\">View on flickr</a>\n    <ul class=\"tags__list\">\n";
  stack1 = ((helpers.tags || (depth0 && depth0.tags) || helperMissing).call(depth0, ((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.tags : stack1), {"name":"tags","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data}));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n  </div>\n</div>\n";
},"useData":true});
})();