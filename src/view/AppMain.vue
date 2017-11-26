<template>
    <div id='container' class="app-main" style="min-height: 100%"></div>
</template>

<script>
import * as THREE from 'three'
import * as TrackballControls from '@/controls/TrackballControls'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'appMain',
  data () {
    return {
      camera: null,
      controls: null,
      scene: null,
      renderer: null,
      container: null
    }
  },
  computed: {
    ...mapGetters([
      'needUpdate',
      'file'])
  },
  mounted () {
    // let scene, camera, pointLight, stats
    // let renderer, mixer, animationClip
    // let clock = new THREE.Clock()
    // let container = document.getElementById('container')
    // // stats = new Stats()
    // container.appendChild(stats.dom)
    // renderer = new THREE.WebGLRenderer({ antialias: true })
    // renderer.setPixelRatio(window.devicePixelRatio)
    // renderer.setSize(window.innerWidth, window.innerHeight)
    // container.appendChild(renderer.domElement)
    // scene = new THREE.Scene()

    // camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 100)
    // camera.position.set(-5.00, 3.43, 11.31)
    // camera.lookAt(new THREE.Vector3(-1.22, 2.18, 4.58))
    // scene.add(new THREE.AmbientLight(0x404040))
    // pointLight = new THREE.PointLight(0xffffff, 1)
    // pointLight.position.copy(camera.position)
    // scene.add(pointLight)

    // if (!Detector.webgl) Detector.addGetWebGLMessage()

    // var cross

    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000)
    this.controls = new THREE.TrackballControls(this.camera)
    this.controls.staticMoving = false
    this.scene = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({ antialias: false })
    this.container = document.getElementById('container')
    // console.log(this.controls)

    var grid = new THREE.GridHelper(100, 100, 0x888888, 0x888888)
    grid.position.set(0, 0, 0)
    this.scene.add(grid)

    this.init()
    this.animate()
  },
  methods: {
    ...mapActions['resetUpdate'],
    init () {
      console.log(this.camera)
      this.camera.position.set(10, 10, 10)

      this.controls = new THREE.TrackballControls(this.camera)

      this.controls.rotateSpeed = 1.0
      this.controls.zoomSpeed = 1.2
      this.controls.panSpeed = 0.8

      this.controls.noZoom = false
      this.controls.noPan = false

    //   this.controls.staticMoving = true
      this.controls.dynamicDampingFactor = 0.3

      this.controls.keys = [ 65, 83, 68 ]

      this.controls.addEventListener('change', this.render)

      this.scene.background = new THREE.Color(0xcccccc)
    //   this.scene.fog = new THREE.FogExp2(0xcccccc, 0.002)

    //   var geometry = new THREE.SphereGeometry(31, 100, 100)
    //   var material = new THREE.MeshBasicMaterial({ color: 0xffffff })

    //   for (var i = 0; i < 500; i++) {
    //   var mesh = new THREE.Mesh(geometry, material)
    //     mesh.position.x = (Math.random() - 0.5) * 1000
    //     mesh.position.y = (Math.random() - 0.5) * 1000
    //     mesh.position.z = (Math.random() - 0.5) * 1000
    //     mesh.updateMatrix()
    //     mesh.matrixAutoUpdate = false
    //   this.scene.add(mesh)
    //   }	// lights

      var geometry2 = new THREE.CylinderGeometry(5, 5, 20, 32)
      var material2 = new THREE.MeshBasicMaterial({color: 0xffffff})
      var cylinder = new THREE.Mesh(geometry2, material2)

      cylinder.position.set(0, 0, 0)
      this.scene.add(cylinder)

    //   var light = new THREE.AmbientLight(0xffffff)
    //   light.position.set(1, 1, 1)
    //   this.scene.add(light)

    //   var light = new THREE.DirectionalLight(0x002288)
    //   light.position.set(-1, -1, -1)
    //   this.scene.add(light)

    //   var light = new THREE.AmbientLight(0x222222)
    //   this.scene.add(light)

	    // renderer

      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      console.log(this)
      this.container.appendChild(this.renderer.domElement)

      window.addEventListener('resize', this.onWindowResize, false)

      this.render()
    },
    onWindowResize () {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.controls.handleResize()
      this.render()
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.updateData()
      this.controls.update()
    },
    render () {
      this.renderer.render(this.scene, this.camera)
    //   console.log(this)
    //   console.log(mapActions['resetUpdate'])
    //   stats.update()
    },
    updateData () {
      if (this.needUpdate) {
        // console.log(this.resetUpdate)
        this.$store.dispatch('resetUpdate')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    $bgColor:#FFFFFF;
    .app-main {
        background: $bgColor;
    }
</style>


