<template>
    <div id='container' class="app-main" style="min-height: 100%"></div>
</template>

<script>
import * as THREE from 'three'
import * as TrackballControls from '@/controls/TrackballControls'
import {stats} from '@/utils/stats.js'
import {mapGetters, mapActions} from 'vuex'

let camera,
  controls,
  scene,
  renderer,
  container

export default {
  name: 'appMain',
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

    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 9999999999)
    controls = new THREE.TrackballControls(camera)
    controls.staticMoving = false
    scene = new THREE.Scene()
    renderer = new THREE.WebGLRenderer({ antialias: false })
    container = document.getElementById('container')
    // console.log(this.controls)

    var grid = new THREE.GridHelper(100, 100, 0x888888, 0x888888)
    grid.position.set(0, 0, 0)
    scene.add(grid)

    this.init()
    this.animate()
  },
  methods: {
    ...mapActions['resetUpdate'],
    init () {
      console.log(camera)
      camera.position.set(5, 10, 0)

      controls = new THREE.TrackballControls(camera)

      controls.rotateSpeed = 1.0
      controls.zoomSpeed = 1.2
      controls.panSpeed = 0.8

      controls.noZoom = false
      controls.noPan = false

    //   this.controls.staticMoving = true
      controls.dynamicDampingFactor = 0.3

      controls.keys = [ 65, 83, 68 ]

      controls.addEventListener('change', this.render)

      scene.background = new THREE.Color(0xcccccc)
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

    //   var geometry2 = new THREE.CylinderGeometry(5, 5, 20, 32)
    //   var material2 = new THREE.MeshBasicMaterial({color: 0xffffff})
    //   var cylinder = new THREE.Mesh(geometry2, material2)

    //   cylinder.position.set(0, 0, 0)
    //   cylinder.up.set(1, 1, 1)
    //   scene.add(cylinder)

    //   var light = new THREE.AmbientLight(0xffffff)
    //   light.position.set(1, 1, 1)
    //   this.scene.add(light)

    //   var light = new THREE.DirectionalLight(0x002288)
    //   light.position.set(-1, -1, -1)
    //   this.scene.add(light)

      var light = new THREE.AmbientLight(0xffffff)
      scene.add(light)

	    // renderer

      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(window.innerWidth, window.innerHeight)
      console.log(this)
      container.appendChild(renderer.domElement)

      container.appendChild(stats.dom)
      window.addEventListener('resize', this.onWindowResize, false)

      this.render()
    },
    onWindowResize () {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      controls.handleResize()
      this.render()
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.updateData()
      controls.update()
    },
    render () {
      stats.begin()
      renderer.render(scene, camera)
      stats.end()
    //   console.log(this)
    //   console.log(mapActions['resetUpdate'])
    //   stats.update()
    },
    updateData () {
      if (this.needUpdate) {
        console.log('清理场景模型')
        scene.children.length = 0

        console.log('更新场景模型')
        this.addNewModel()
        this.render()
        this.$store.dispatch('resetUpdate')
      }
    },
    addNewModel () {
      let i = 0
      let atoms = this.file.content
      let len = atoms.length
      console.log(atoms)
      let molecule = new THREE.Object3D()
        // 小数位数太多会不会有计算精度误差的问题
      for (i = 0; i < len; i++) {
        var geometry = new THREE.SphereGeometry(atoms[i].radius / 100, 30, 30)
        // var geometry = new THREE.SphereGeometry(atoms[i].radius / 100, 30, 30)
        var material = new THREE.MeshBasicMaterial({ color: '#' + atoms[i].color })
        var mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(atoms[i].position.x, atoms[i].position.y, atoms[i].position.z)
        // console.log(mesh)
        molecule.add(mesh)
      }
      molecule.position.set(0, 10, 0)
      camera.lookAt(molecule.position)
      scene.add(molecule)

      var grid = new THREE.GridHelper(100, 100, 0x888888, 0x888888)
      grid.position.set(0, 0, 0)
      scene.add(grid)
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


