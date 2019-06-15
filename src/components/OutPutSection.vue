<template lang="pug">
  section.p-outputSection
    //-button.c-btn.p-btnNetPrint ネットプリント
    button.c-btn.p-btnSave(v-on="onClickSave") 画像を保存
</template>

<script>
export default {
  name: "OutPutSection",
  data() {
    return {};
  },
  methods: {
    onClickSave(e) {
      console.log("onclickSave:", e);
    }
  }
};
</script>

<style lang="scss" scoped>
.l-header {
  background-color: slategrey;
  color: #fff;
  padding: 2em 0;
  width: 100%;
}
</style>
