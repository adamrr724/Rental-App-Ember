import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return Ember.RSVP.hash({
       cities: this.store.findAll('city'),
       rentals: this.store.findAll('rental')
     });
  },
  actions: {
    save3(params) {
    var newCity = this.store.createRecord('city', params);
    newCity.save();
    this.transitionTo('index');
  },
}
});
