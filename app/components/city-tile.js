import Ember from 'ember';

export default Ember.Component.extend({
  fullLocation: Ember.computed('city.name', 'city.country', function() {
    return this.get('city.name') + ", " + this.get('city.country');
  }),

  sortBy: ['cost:asc'],
  sortedRentals: Ember.computed.sort('city.rentals', 'sortBy'),
  
  actions: {
    destroyCity(city) {
      var rental_deletions = city.get('rentals').map(function(rental) {
        return rental.destroyRecord();
      });
      Ember.RSVP.all(rental_deletions).then(function() {
        return city.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
