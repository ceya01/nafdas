<template lang="pug">
  section.p-inputSection
    label(for="twID") TwitterID
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
.l-header{
  background-color: slategrey;
  color: #FFF;
  padding:2em 0;
  width: 100%;
}
</style>
