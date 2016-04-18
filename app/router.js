import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('statuspages', function() {});
  this.route('statuspage', { path: '/statuspages/:statuspage_id'}, function() {});
});

export default Router;
