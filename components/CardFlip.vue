<template>
  <div>
    <div class="position-relative">
      <div class="flip-tile">
        <div class="position-absolute h-100 w-100">
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front bg-light"></div>
              <div class="flip-card-back bg-primary">
                <h2>{{ card.title.rendered }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  data() {
    return {
      title: 'Posts page',
    }
  },
}
</script>
<style scoped>
.flip-tile::after {
  content: '';
  display: block;
  padding-bottom: 100%;
}
.flip-card {
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-back {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: rotateY(180deg);
}
</style>