<template lang="pug">
  section.p-nameCardSection
    NameCard
    NameCard.--dark
</template>

<script>
import NameCard from "@/components/NameCard"
export default {
  name: 'NameCardSection',
  components: {
    NameCard
  },
  computed:{
    option :{
      get (){
        return this.$store.getters.option
      },
      set (value){
        this.$store.commit('setOption', value)
      }
    }
  },
  methods:{
    onChangeInput: function(evt){
    }
  }
}

</script>

<style lang="scss" scoped>
.p-nameCardSection{
  display: flex;
}
</style>
