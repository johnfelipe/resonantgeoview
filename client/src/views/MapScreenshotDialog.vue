<template>
  <v-dialog
    v-show="image"
    :value="value"
    @input="$emit('input', $event)"
    lazy
    max-width="650px"
  >
    <v-card>
      <div class="image-container">
        <img :src="image" />
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="!image">
          <a class="download-link" :href="image" download="screenshot.png"
            >Download</a
          >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "MapScreenshotDialog",
  props: {
    value: {
      type: Boolean,
      required: true
    },
    map: {}
  },
  data() {
    return {};
  },
  asyncComputed: {
    image() {
      if (!this.map) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(null);
          }, 300);
        });
      } else {
        var layers = this.map.layers();
        return this.map.screenshot({ layers });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.image-container {
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;

  img {
    width: 100%;
  }
}

.download-link {
  color: inherit;
  text-decoration: none;
}
</style>
