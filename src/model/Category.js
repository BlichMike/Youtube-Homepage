class Category {
  constructor(name = "", vids = [], local = false) {
    if (local === false) {
      this.id = Category.incrementId();
    }
    this.name = name;
    this.vids = vids;
    this._local = local;
  }

  static incrementId() {
    if (typeof this.latestId === "undefined") {
      this.latestId = 0;
    } else {
      this.latestId++;
    }
    return this.latestId;
  }
}

export default Category;
