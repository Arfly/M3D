<template>
  <div class="file-reader">
      <div @click="chooseFile" type="primary">open</div>
      <input type="file" ref="file" @change="loadFile" style="display:none">
  </div>
</template>

<script>
import {readFile} from '@/utils/ReadFile'

export default {
  name: 'fileReader',
  data () {
    return {
      file: null
    }
  },
  methods: {
    loadFile () {
      let file = this.$refs.file.files[0]
      readFile(file)
    },
    chooseFile () {
      this.$refs.file.click()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>


