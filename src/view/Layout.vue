<template>
    <div class="layout">
        <navbar></navbar>
        <sidebar></sidebar>
        <app-main></app-main>
    </div>
</template>

<script>
import navbar from '@/view/Navbar'
import sidebar from '@/view/Sidebar'
import appMain from '@/view/AppMain'

export default {
  name: 'layout',
  components: {
    navbar,
    sidebar,
    appMain
  }
}
</script>

<style lang="scss" scoped>

</style>


