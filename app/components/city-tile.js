import Ember from 'ember';

export default Ember.Component.extend({
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
