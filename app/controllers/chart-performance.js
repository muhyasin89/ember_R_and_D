import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    getCurrent(page) {
      alert(page);
    },
  },
});
