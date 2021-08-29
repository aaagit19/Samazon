import 'bootstrap';
import '../stylesheets/application';
import '../stylesheets/app';
import '../stylesheets/products';
import '../stylesheets/samazon';


require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

var jQuery = require('jquery')
global.$ = global.jQuery = jQuery;
window.$ = window.jQuery = jQuery;