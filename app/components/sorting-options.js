import Ember from 'ember';

export default Ember.Component.extend({
  isSelected: true,
  actions: {
    toggleCost(){
      this.set('isSelected', false);
      this.sendAction('sendCost');
    },
    toggleBedrooms(){
      this.set('isSelected', true);
      this.sendAction('sendBedrooms');
    }
  }
});
