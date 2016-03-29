import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  isBigImageShowing: true,
  updateRentalForm: false,
  actions: {
    imageShow: function() {
      this.set('isBigImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false);
    },
    bigImageHide: function() {
      this.set('isBigImageShowing', false);
    },
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
