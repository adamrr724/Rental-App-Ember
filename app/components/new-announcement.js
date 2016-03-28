import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save4() {
      var params = {
        title: this.get('title'),
        type: this.get('type'),
        priority: this.get('priority'),
        message: this.get('message')
      };
      this.set('addNewAnnouncement', false),
      this.sendAction('save5', params);
    }
  }
});
