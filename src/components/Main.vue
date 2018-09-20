<template>
  <div class="container is-widescreen">
    <div class="notification">
      <figure class="image 3by1">
        <img src="http://www.tbg.kahaku.go.jp/recommend/illustrated/photoimages/0703//8159l.jpg">
      </figure>
      <p>ヤブツバキ（国立科学博物館筑波実験植物園）<br>© 2009 NATIONAL MUSEUM OF NATURE AND SCIENCE, TOKYO.</p>
    </div>
    <div id="content"></div>
  </div>
</template>

<script>
</script>

<style scoped>
img {
  height: 600px;
  object-fit: cover; /* この一行を追加するだけ！ */
}
.notification{
  background-color: black;
}
p{
  color:white;
  text-align:right;
  font-size:0.5em;
}
</style>
