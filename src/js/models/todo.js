import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

var TodoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  }
});

export default TodoModel;
