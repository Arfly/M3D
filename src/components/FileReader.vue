<template>
  <div class="file-reader">
      <div @click="chooseFile" type="primary">open</div>
      <input type="file" ref="file" @change="readFile" style="display:none">
  </div>
</template>

<script>
import {parse} from '@/utils/Parser'

export default {
  name: 'fileReader',
  data () {
    return {
      file: null
    }
  },
  methods: {
    readFile () {
      let file = this.$refs.file.files[0]
      if (!file) {
        return
      }
      console.log(this.$refs)
      let reader = new FileReader()
      reader.readAsText(file)
      reader.onload = function () {
        // console.log(this.result)
        parse(this.result)
      }
    },
    chooseFile () {
      this.$refs.file.click()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


