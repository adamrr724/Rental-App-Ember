import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  isBigImageShowing: true,
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
    delete(rental) {
      if (confirm('Are you sure you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
