import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(rental) {
      var latitude = rental.get('latitude');
      var longitude = rental.get('longitude');
      var myLatLng = {lat: latitude, lng: longitude};

      var container = this.$('.map-display')[0];
      this.get('map').findMap(container, myLatLng);
    }
  }

});
