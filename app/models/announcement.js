import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  type: DS.attr(),
  priority: DS.attr(),
  message: DS.attr()
});
