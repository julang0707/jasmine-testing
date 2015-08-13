import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

import TodosCollection from '../collections/todos';
import AddView from '../views/add-view';
import ListView from '../views/list-view';

var AppView = Backbone.View.extend({
  el: '#todo-app',

  initialize: function() {
    var todos = new TodosCollection();
    this.addView = new AddView({
      collection: todos
    });
    this.listView = new ListView({
      collection: todos
    });
  },

  render: function() {
    this.addView.render();
    this.listView.render();

    this.$('header').append(this.addView.el);
    this.$('main').html(this.listView.el);
  }
});

export default AppView;
