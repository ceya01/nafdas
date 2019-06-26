<template lang="pug">
  section.p-nameCardSection
    NameCard
    NameCard.--dark(v-if="option.isAddDarkTheme")
</template>

<script>
import NameCard from "@/components/NameCard"
export default {
  name: 'NameCardSection',
  components: {
    NameCard
  },
  computed:{
    option : function(){
      return this.$store.getters.option
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
