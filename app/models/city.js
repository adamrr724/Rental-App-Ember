import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  country:DS.attr(),
  rentals: DS.hasMany('rental', {async:true})
});
