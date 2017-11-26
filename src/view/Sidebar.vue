<template>
  <div class="sidebar">
        <!-- <el-col :span="3">
            <el-menu default-active="1" class="tool-menu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
            </el-menu>
        </el-col> -->
      
  </div>
</template>

<script>
export default {
  name: 'sidebar'
}
</script>

<style lang="scss" scoped>
    .sidebar {
        .tool-menu {}
        // position: fixed;
        // left:0;
        // top: 200px;
        // width:50px;
        // height: 200px;
        // background-color: #545c64;
    }
</style>


