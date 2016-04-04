import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    cityFormHide: function() {
      this.set('addNewCity', false);
    },
    save1() {
      var params = {
        name: this.get('name'),
        country: this.get('country'),
        rentals: this.get('rentals'),
      };
      this.set('addNewCity', false);
      this.sendAction('save2', params);
    }
  }
});
