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
            <el-menu-item index="2-1">Aspirin</el-menu-item>
            <el-menu-item index="2-2">BlindII</el-menu-item>
            <el-menu-item index="2-3">
                <file-reader></file-reader>
            </el-menu-item>
        </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import fileReader from '@/components/FileReader'

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
    }
  }
}
</script>

<style lang="scss" scoped>
    .navbar {
     
    }
</style>


