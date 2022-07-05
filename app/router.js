import EmberRouter from '@ember/routing/router';
import config from 'rd/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('test',{ path: '/test'});
  this.route('about',{ path: '/about'});
  this.route('contact',{ path: '/contact'});
  this.route('rentals',{ path: '/rentals'});
});
