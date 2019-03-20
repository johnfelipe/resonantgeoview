<script>
// import Cesium from "cesium/Cesium";

export default {
  name: "Tileset3D",
  inject: ["$viewer"],
  props: {
    dataset: {
      required: true
    }
  },
  created() {
    this.tileset = new Cesium.Cesium3DTileset({
      url: Cesium.IonResource.fromAssetId(this.dataset.geometa.assetId)
    });
    this.$viewer.scene.primitives.add(this.tileset);
    this.$viewer.zoomTo(this.tileset);
  },
  beforeDestroy() {
    this.$viewer.scene.primitives.remove(this.tileset);
  },
  render() {
    return null;
  }
};
</script>
