import Controller from '@ember/controller';
import { computed } from "@ember/object";

export default Controller.extend({
  tweets: computed.alias("model.tweet"),
  displayTweets: true,
  actions: {
    toggleDisplay() {
      console.log("Hello!");
      this.toggleProperty('displayTweets');
    }
  }
});
