import Backbone from 'backbone';
import {_} from 'underscore';
import $ from 'jquery';

import TodoModel from '../models/todo';

var TodosCollection = Backbone.Collection.extend({
  model: TodoModel
});

export default TodosCollection;
