import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return Ember.RSVP.hash({
       cities: this.store.findAll('city'),
       rentals: this.store.findAll('rental')
     });
  },
});
