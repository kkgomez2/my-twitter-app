import Route from '@ember/routing/route';
import { get, set, getWithDefault } from "@ember/object";

export default Route.extend({
  model() {
    return [
      {
        userName: "Sean Cummings",
        userScreenName: "sean_cummings",
        userImage: "https://randomuser.me/api/portraits/men/47.jpg",
        verified: false,
        text: "A Tweet about SAVO!",
        date: "Mon Sep 24 03:35:21 +0000 2012",
        url: "http://google.com/",
        retweetCount: 3,
        favoriteCount: 4
      },
      {
        userName: "Pearl Connors",
        userScreenName: "Omnitarian",
        userImage: "https://randomuser.me/api/portraits/women/47.jpg",
        verified: false,
        text: "Which sales enablement platform is right for my business? SAVO?",
        date: "Fri Sep 21 23:40:54 +0000 2012",
        url: "http://yahoo.com/",
        retweetCount: 1,
        favoriteCount: 7
      },
      {
        userName: "Bull City Records",
        userScreenName: "bullcityrecords",
        userImage: "https://randomuser.me/api/portraits/lego/3.jpg",
        verified: true,
        text: "Anyone ever been to Savoy?",
        date: "Fri Sep 21 23:30:20 +0000 2012",
        url: "http://hulu.com/",
        retweetCount: 45,
        favoriteCount: 66
      }
    ]
  }
});
