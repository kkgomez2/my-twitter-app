import { Factory, faker } from "ember-cli-mirage";

export default Factory.extend({
  userName() {
    return faker.name.findName();
  },
  userScreenName() {
    return faker.internet.userName();
  },
  userImage() {
    return faker.image.avatar();
  },
  text() {
    return faker.lorem.sentences(1 + Math.floor(Math.random() * 3));
  },
  date() {
    return faker.date.recent(5);
  }
});
