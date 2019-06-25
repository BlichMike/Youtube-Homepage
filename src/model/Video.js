class Video {
  constructor(
    name = "",
    userName = "",
    views = 0,
    uploadDate = new Date(),
    local = false
  ) {
    if (local === false) {
      this.id = Video.incrementId();
    }
    this.name = name;
    this.userName = userName;
    this.views = views;
    this.uploadDate = uploadDate;
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

export default Video;
