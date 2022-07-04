import EmberRouter from '@ember/routing/router';
import config from 'rd/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('welcome');

  this.route('dashboard', function () {
    this.route('web');
    this.route('mobile');
  });
});
