import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.attr(),
  city: DS.belongsTo('city',  {async:true}),
  type: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr()
});
