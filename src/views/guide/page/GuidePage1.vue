<template>
  <div class="container">
    <div class="top-container"></div>

    <div class="video-container">
      <video
        src="../assets/2.mp4"
        id="video"
        autoplay
        loop
        muted
        :style="{ objectFit: 'cover' }"
      />
    </div>

    <div class="text-container">
      <p class="text-bold">创作没有灵感？</p>
      <p class="text-bold">还在为写作而烦恼？</p>
    </div>

    <div class="bottom-container"></div>

    
  </div>
</template>

<style scoped>
/* 根容器，使用 Flexbox 垂直布局 */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between; /* 上下两个容器和中间内容均匀分布 */
  height: 100vh;
  width: 100%;
  overflow: hidden; /* 防止溢出 */
  background-color: #f5f5f5; /* 背景色，可根据需要调整 */
}

/* 顶部容器，颜色为蓝色 */
.top-container {
  width: 100%;
  flex: 1; /* 自适应剩余空间 */
  background-color: #5582F8;
}

/* 视频容器，使用 Flexbox 水平居中 */
.video-container {
  
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh; /* 视频容器高度，占据视窗高度的 60% */
}

/* 确保视频宽度为100%，保持视频比例 */
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 底部容器，颜色为绿色 */
.bottom-container {
  width: 100%;
  flex: 1; /* 自适应剩余空间 */
  background-color: #5483F6;
}

/* 文本容器 */
.text-container {
  text-align: center;
  margin: 2vh 0; /* 上下外边距为 2vh，左右为 0 */
}

/* 加粗的文本 */
.text-bold {
  font-weight: bold;
  font-size: 1.2rem; /* 字体大小，可根据需要调整 */
  margin: 0.5vh 0; /* 文本上下外边距为 0.5vh，左右为 0 */
}
</style>

<script setup lang="ts">
// 你的脚本内容
</script>
