import Category from "../model/Category";
import Video from "../model/Video";

class dataService {
  constructor() {
    this.allVideos = {};
    this.allCategories = {};
    for (let i = 0; i < 10; i++) {
      let vid = new Video(`vid${i + 1}`, `user${i + 1}`, (i + 1) * 1000);
      this.allVideos[vid.id] = vid;
    }

    for (let i = 0; i < 5; i++) {
      let vidsArr = [i, i + 1, i + 2, i + 3, i + 4];
      let cat = new Category(`cat${i + 1}`, vidsArr);
      this.allCategories[cat.id] = cat;
    }

    this.mainCategories = [
      this.allCategories[0],
      this.allCategories[2],
      this.allCategories[4]
    ];

    this.sideNavCategories = [
      [{ text: "Home" }, { text: "Trending" }, { text: "Subscriptions" }],
      [{ text: "Library" }, { text: "History" }],
      [
        {
          text: "Sign in to like videos, comment, and subscribe.",
          buttonTxt: "SIGN IN"
        }
      ]
    ];
  }
  getVideos() {
    return this.allVideos;
  }

  getAllCategories() {
    return this.allCategories;
  }

  getMainCategories() {
    return this.mainCategories;
  }

  getSideNavCategories() {
    return this.sideNavCategories;
  }
}

export default new dataService();
