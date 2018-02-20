import DS from 'ember-data';

export default DS.Model.extend({
  userName: DS.attr("string"),
  userScreenName: DS.attr("string"),
  userImage: DS.attr("string"),
  verified: DS.attr("boolean"),
  text: DS.attr("string"),
  date: DS.attr("string"),
  url: DS.attr("string"),
  retweetCount: DS.attr("number"),
  favoriteCount: DS.attr("number")
});
