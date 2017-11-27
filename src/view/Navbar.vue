<template>
    <div class="navbar">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">File</template>
            <el-menu-item index="Aspirin">Aspirin</el-menu-item>
            <el-menu-item index="BlindII">BlindII</el-menu-item>
            <el-menu-item index="open">
                <file-reader></file-reader>
            </el-menu-item>
        </el-submenu>
        </el-menu>
        
    </div>
</template>

<script>
import fileReader from '@/components/FileReader'
import { readFile } from '@/utils/ReadFile'

export default {
  name: 'navbar',
  components: {
    fileReader
  },
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      switch (key) {
        case 'Aspirin':
          
          break
        case 'BlindII':
          readFile()
          break
        case 'open':
          return
        default:
          console.error('组件未知错误')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    .navbar {
     
    }
</style>


