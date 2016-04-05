import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(rental) {
      var map1 = this.get('map');
      var latitude = rental.get('latitude');
      var longitude = rental.get('longitude');
      var myLatLng = {lat: latitude, lng: longitude};

      var container = this.$('.map-display')[0];
      var options = {
        center: map1.center(myLatLng),
        zoom: 15
      };

      var marker = new google.maps.Marker({
        position: map1.center(myLatLng),
        map: map1,
        title: 'rental.type',
        animation: google.maps.Animation.DROP,
      });
      this.get('map').findMap(container, options);

    }
  }

});
