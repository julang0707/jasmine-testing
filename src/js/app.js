import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import AppView from './views/app-view';

var Todo = window.Todo = window.Todo || {};

(function() {

  var app = new AppView();
  app.render();

  Todo.app = app;
}());
