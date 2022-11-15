<template>
    <div id="content">
      <div class="teaser">
        <div class="teaser-content">
          Read Article
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
      <div class="infobox">
        <div class="title">Articles</div>
        <div class="value">128</div>
      </div>
      <div class="infobox">
        <div class="title">Readers</div>
        <div class="value">18k</div>
      </div>
      <div class="infobox">
        <div class="title">Likes</div>
        <div class="value">302k</div>
      </div>
      <div class="infobox">
        <div class="title">Comments</div>
        <div class="value">145k</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .teaser {
    position: relative;
    width: 100%;
    max-width: 768px;
    height: 400px;
    margin-bottom: 40px;
    background-size: cover;
    background-position: top;
    border-radius: 20px;
    overflow: hidden;
  }
  .teaser .teaser-content {
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 210px;
    height: 50px;
    padding: 0 0 0 20px;
    background-color: #111;
    color: #efefef;
    border-radius: 20px;
    font-size: 2rem;
    cursor: pointer;
  }
  .teaser i {
    font-size: 1.6rem;
  }
  .infobox {
    float: left;
    width: 100px;
    height: 100px;
    padding: 10px;
    margin: 0 20px 20px 0;
    border-radius: 20px;
    border: 1px solid #ccc;
  }
  .infobox .title {
    font-weight: bold;
  }
  .infobox .value {
    padding: 10px 0 0 0;
    font-size: 2rem;
  }
  </style>
  