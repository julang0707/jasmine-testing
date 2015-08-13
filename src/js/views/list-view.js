import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

import TodoView from './todo-view';

var ListView = Backbone.View.extend({
    tagName: 'ul',

    initialize: function() {
      this.listenTo(this.collection, 'add', this.addOne);
    },

    addAll: function() {
      this.collection.each(function(todo) {
        this.addOne(todo);
      }, this);
    },

    addOne: function(todo) {
      var view = new TodoView({model: todo});
      this.$el.append(view.render().el);

    },

    render: function() {
      return this;
    }
  });

export default ListView;
