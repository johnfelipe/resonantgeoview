<template>
  <div class="new-with-name">
    <transition name="fade" mode="out-in">
      <v-btn
        flat
        block
        v-if="!adding"
        color="primary"
        class="button"
        @click="add"
      >
        <v-icon class="mr-2">add_circle</v-icon>
        New {{ name }}
      </v-btn>
      <v-text-field
        class="mx-2"
        style="margin-bottom:2px"
        v-if="adding"
        name="Name"
        label="Name"
        v-model="value"
        hide-details
        append-icon="add_circle"
        @click:append="confirm"
        prepend-icon="cancel"
        @click:prepend="adding = false"
      ></v-text-field>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.new-with-name {
  position: relative;

  .button {
    height: 50px;
    margin: 0;
  }
}
</style>

<script>
export default {
  name: "NewWithName",
  props: {
    name: String,
    default: {
      type: String,
      default: ""
    },
    noConfirm: {
      type: Boolean,
      defualt: false
    }
  },
  data() {
    return {
      adding: false,
      value: this.default
    };
  },
  methods: {
    add() {
      if (!this.noConfirm) {
        this.adding = true;
      } else {
        this.confirm();
      }
    },
    confirm() {
      this.adding = false;
      this.$emit("confirm", this.value);
    }
  }
};
</script>
