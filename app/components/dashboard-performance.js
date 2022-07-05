import Component from "@ember/component";
import * as am4core from "@amcharts/amcharts4/core";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { inject as service } from "@ember/service";
import config from "../../config/environment";

import dateFilter from '../../utils/dateFilter';
import dateFilterExcel from "../../utils/dateFilterExcel";

am4core.useTheme(am4themes_animated);

export default Component.extend({
  session: service(),
  pageInfo: null,
	comboBox: null,
  dateGraphFrom: null,
  dateGraphTo: null,
  comboBoxId: null,

  init() {
    this._super(...arguments);

    var d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    this.dateGraphFrom = year + "-" + month + "-" + "01";
    this.dateGraphTo = year + "-" + month + "-" + day;
  },
  getChart(){
    console.log("inside get chart");
  },
  didInsertElement() {
    this._super(...arguments);
  
    console.log('Model dealer Performance',this.get('infoPage'));
    
    let filterData = dateFilter(this.dateGraphFrom, this.dateGraphTo, this.comboBoxId);
    console.log(filterData)

     if(filterData["error"]){
       this.set("errorMessages", filterData["error"]);
       return false
     }

     let filter = filterData["dateFilter"];

   
  },
  actions: {
    updateValue: function(value) {
      console.log(value);
      this.set('comboBoxId', value);
    },
    searchGraph() {
      console.log("inside Graph action");
      console.log("Combobox ID", this.comboBoxId);
      let filterData = dateFilter(this.dateGraphFrom, this.dateGraphTo, this.comboBoxId)

      if(filterData["error"]){
        this.set("errorMessages", filterData["error"]);
        return false
      }

      let filter = filterData["dateFilter"];
    

    },
    downloadGraphExcel() {
      let filter = dateFilterExcel(this.dateGraphFrom, this.dateGraphTo);

      
      let url = config.APP.api.host + "/download-graph-excel?" + filter;
      let token = this.session.data.authenticated.access_token;

      // fetch(url, {
      //   headers: {
      //     "Content-Type":
      //       "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      //       'Access-Control-Allow-Origin': '*',
      //     Authorization: `Bearer ${token}`,
      //   },
      // })

    },
  },
  willDestroyElement() {
  
  },
});
