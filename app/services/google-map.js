import Ember from 'ember';

export default Ember.Service.extend({
  googleMaps: window.google.maps,
  findMap(container, myLatLng) {
    var map = new this.googleMaps.Map(container, {
      zoom: 15,
      center: myLatLng,
    });
    var marker = new this.googleMaps.Marker({
      position: myLatLng,
      map: map,
    });
  }
});
