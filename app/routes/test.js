import Route from '@ember/routing/route';

import pageInfoData from "../data/page_info";

export default class TestRoute extends Route {

    model(params){
        console.log("this is page", pageInfoData);
        let pageInfo = this.controllerFor('test');
        pageInfo.set('pageInfo', pageInfoData);
    }
}
