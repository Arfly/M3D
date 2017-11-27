<template>
    <div v-loading="this.$store.state.loading" :element-loading-text="this.$store.state.loadingTxt" id='container' class="app-main" style="min-height: 100%">
        
  </span>
</el-dialog>
    </div>
</template>

<script>
import * as THREE from 'three'
import * as TrackballControls from '@/controls/TrackballControls'
import {stats} from '@/utils/stats.js'
import {mapGetters, mapActions} from 'vuex'
import { parse } from '@/utils/Parser'

let camera,
  controls,
  scene,
  renderer,
  container,
  ambient = new THREE.AmbientLight(0xffffff, 0.1),
  lightUp = new THREE.DirectionalLight(0xffffff, 1),
  lightDown = new THREE.DirectionalLight(0xffffff, 1),
  moleculeStructure,
  moleculeModel

export default {
  name: 'appMain',
  computed: {
    ...mapGetters([
      'needUpdate',
      'file'])
  },
  data () {
    return {
      dialogVisible: false
    }
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
      this.$store.dispatch('loading')
      console.log(camera)
      let fileLoader = new THREE.FileLoader()
      fileLoader.load('/static/Aspirin.xyz', function (res) {
        console.log(fileLoader, res)
        parse(res)
      })

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

      scene.add(ambient)

    // renderer

      lightUp.position.set(10000, 10000, 10000)
      lightDown.position.set(-10000, -10000, -10000)

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
        this.$store.dispatch('startRender')
        console.log('更新场景模型')
        this.addNewModel()
        this.render()
        this.$store.dispatch('resetUpdate')
        this.$store.dispatch('loaded')
      }

      if (this.$store.state.updateVisibleInfo) {
        moleculeStructure.visible = this.$store.state.structureShow
        moleculeModel.visible = this.$store.state.modelShow
        this.$store.dispatch('resetVisibleState')
        this.render()
      }
    },
    addNewModel () {
      let i = 0
      let atoms = this.file.content
      let len = atoms.length
      console.log(atoms)
      moleculeStructure = new THREE.Object3D()
      moleculeModel = new THREE.Object3D()
        // 小数位数太多会不会有计算精度误差的问题
      for (i = 2; i < len; i++) { // 第一位原子数目，第二位分子名称
        var geometry = new THREE.SphereGeometry(32 / 100, 30, 30)
        // var geometry = new THREE.SphereGeometry(atoms[i].radius / 100, 30, 30)
        var material = new THREE.MeshPhongMaterial({ color: '#' + atoms[i].color })
        var mesh = new THREE.Mesh(geometry, material)
        mesh.position.set(atoms[i].position.x, atoms[i].position.y, atoms[i].position.z)
        mesh.name = atoms[i].atom
        console.log(mesh)

        geometry = new THREE.SphereGeometry(atoms[i].radius / 100, 30, 30)
        material = new THREE.MeshPhongMaterial({ color: '#' + atoms[i].color })
        var meshModel = new THREE.Mesh(geometry, material)
        meshModel.position.set(atoms[i].position.x, atoms[i].position.y, atoms[i].position.z)
        meshModel.name = atoms[i].atom
        console.log(mesh)

        let bondsNum = atoms[i].bonds.length
        let bonds = atoms[i].bonds
        for (let j = 0; j < bondsNum; j++) {
          console.log(bonds[j])
          var cylinder = new THREE.CylinderGeometry(10 / 100, 10 / 100, bonds[j].length, 20)
          var cylinderMaterial = new THREE.MeshPhongMaterial({color: '#' + bonds[j].color})
        //   console.log(bonds[j].color)
          var bond = new THREE.Mesh(cylinder, cylinderMaterial)
          var originDir = new THREE.Vector3(0, 1, 0)
          var dir = new THREE.Vector3(bonds[j].direction.x, bonds[j].direction.y, bonds[j].direction.z)
          var Raxis = new THREE.Vector3()
          Raxis.crossVectors(originDir, dir).normalize()
          var angle = originDir.angleTo(dir)
          bond.setRotationFromAxisAngle(Raxis, angle)
          console.log(Raxis, angle)
          bond.position.set(bonds[j].position.x, bonds[j].position.y, bonds[j].position.z)
        //   cylinder.up.set(1, 1, 1)

        //   mesh.add(bond)
          moleculeStructure.add(bond)
        }
        moleculeStructure.add(mesh)
        moleculeModel.add(meshModel)
      }
      moleculeStructure.position.set(0, 0, 0)
      moleculeStructure.name = atoms[1]

      moleculeModel.position.set(0, 0, 0)
      moleculeModel.name = atoms[1]

      camera.lookAt(moleculeStructure.position)
      scene.add(moleculeStructure)
      scene.add(moleculeModel)

      moleculeModel.visible = this.$store.state.modelShow
      moleculeStructure.visible = this.$store.state.structureShow
      console.log(moleculeStructure)
      var grid = new THREE.GridHelper(100, 100, 0x888888, 0x888888)
      grid.position.set(0, 0, 0)
      scene.add(grid)
      scene.add(ambient)

      scene.add(lightUp)

      scene.add(lightDown)
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


