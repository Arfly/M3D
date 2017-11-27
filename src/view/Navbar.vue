<template>
    
        <div>
       <div class="navbar"> 
           <!-- <el-switch class="switch" v-model="isCollapse" active-color="#ffd04b" ></el-switch> -->
   
            <el-menu default-active="1-4-1" class="el-menu-vertical-demo" background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-document"></i>
                <span slot="title">File</span>
                </template>
                <el-menu-item-group>
                <span slot="title">File</span>
                <el-menu-item index="Aspirin">Aspirin</el-menu-item>
                <el-menu-item index="BlindII">BlindII</el-menu-item>
                <el-menu-item index="Open" ref="openBtn">
                    <file-reader></file-reader>
                </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="setting">
                <i class="el-icon-setting"></i>
                <span slot="title">Setting</span>
            </el-menu-item>
            <el-menu-item index="info">
                <i class="el-icon-info"></i>
                <span slot="title">Info</span>
            </el-menu-item>
            </el-menu>
            
    </div>
    <el-dialog title="Info" :visible.sync="InfoShow" width="30%">
                <span>Name</span>
                <el-tag type="info">{{this.$store.state.file.content[1]}}</el-tag>
                <span>Atoms Num</span>
                <el-tag type="info">{{this.$store.state.file.content[0]}}</el-tag>
                <el-tag v-for="item in this.$store.state.elements" style="margin:4px 4px;" :color="'#'+item.color" v-bind:key="item.atom">{{item.atom}}</el-tag>
            </el-dialog>
            <el-dialog title="Setting" :visible.sync="SettingShow" width="30%">
                <el-button @click="showStructure">Structure</el-button>
                <el-button @click="showModel">Model</el-button>
            </el-dialog>
            </div>
</template>

<script>
import fileReader from '@/components/FileReader'
import { readFile } from '@/utils/ReadFile'
import { parse } from '@/utils/Parser'
import * as THREE from 'three'
let fileLoader = new THREE.FileLoader()

export default {
  name: 'navbar',
  components: {
    fileReader
  },
  data () {
    return {
      activeIndex: '1',
      isCollapse: true,
      InfoShow: false,
      SettingShow: false
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      switch (key) {
        case 'Aspirin':
          this.$store.dispatch('startParse')
          fileLoader.load('/static/Aspirin.xyz', function (res) {
            parse(res)
          })
          break
        case 'BlindII':
          this.$store.dispatch('startParse')
          fileLoader.load('/static/blindII.xyz', function (res) {
            parse(res)
          })
          break
        case 'open':
          this.$store.dispatch('loadingFile')
          console.log(this.$refs.openBtn)
          break
        case 'info':
          this.InfoShow = true
        //   this.$store.dispatch('showInfoDialog')
          break
        case 'setting':
          this.SettingShow = true
          break
        default:
          console.error('组件未知错误')
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    showStructure () {
      this.$store.dispatch('showStructure')
    },
    showModel () {
      this.$store.dispatch('showModel')
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

    .navbar {
        min-height: 600px;
        margin: 10px 5px;
        // display: inline-block;
        position: fixed;
        left: 0;
        .switch {
            margin-bottom: 10px;
        }
    }
</style>


