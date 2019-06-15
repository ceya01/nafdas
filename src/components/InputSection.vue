<template lang="pug">
  section.p-inputSection
    label(for="twID") TwitterID: 
    input.__inputText#twID(type="text" placeholder="TwitterIDを入力")
</template>

<script>
export default {
  name: 'InputSection',
    data () {
    return {
       
    } 
  }
}
</script>

<style lang="scss" scoped>
.p-inputSection{
  >.__inputText{
    outline: 1px solid #666;
    padding: 0 0.5em;
    background-color: #fff;
  }
}
</style>
