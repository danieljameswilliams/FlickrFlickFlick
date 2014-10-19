var App = App || {};
App.Views = App.Views || {};

App.Views.ImageItem = (function () {

  var Struct = Backbone.View.extend({
    el: '.image__list',
    template: Handlebars.templates['image-item'],
    collection: App.Collections.Images.OBJECT,
    events: {
      'click .js-image__item-link': 'onDetailClicked'
    },
    initialize: function () {
      _.bindAll(this, 'render', 'appendImage', 'onDetailClicked');
      this.collection.bind( 'add', this.appendImage );
    },
    render: function ( data ) {
      if(typeof data == 'object') {
        var model = new App.Models.Image.MODEL();
        model.set( data );
        this.collection.add( model );
        return this;
      }
    },
    appendImage: function ( model ) {
      var modelWithId = _.extend( {}, model.toJSON(), { cid: model.cid } );
      var html = this.template( { model: modelWithId } );
      this.collection.el.append( html );
    },
    onDetailClicked: function ( event ) {
      event.preventDefault();

      var modelId = $( event.currentTarget ).parents('.image__item').data('id');
      var model = this.collection.get( modelId );

      window.localStorage.setItem( 'viewDetail', JSON.stringify( model ) );

      var href = $( event.target ).attr('href');
      App.Router.Image.OBJECT.navigate( href, { trigger : true } );

      return false;
    }
  });

  var newObject = new Struct();

  return {
    STRUCT: Struct,
    OBJECT: newObject
  };

})();
