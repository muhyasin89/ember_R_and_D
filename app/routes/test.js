import Route from '@ember/routing/route';

import pageInfoData from '../data/page_info';
export default Route.extend({
  model(params) {
    console.log('this is page', pageInfoData);
    let pageInfo = this.controllerFor('test');
    pageInfo.set('pageInfo', pageInfoData);
  },
});
