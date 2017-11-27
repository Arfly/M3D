import {Atoms} from './atom.config'

export class Atom {
  constructor (ele, pos) {
    this.atom = ''
    this.position = {
      'x': 0,
      'y': 0,
      'z': 0
    }
    this.color = 'FFFFFF'
    this.radius = 0
    this.neighbors = []
    this.bonds = []

    if (ele && Atoms[ele]) {
      this.atom = ele
      this.radius = Atoms[ele].radius
      this.color = Atoms[ele].color
    }

    if (pos) {
      this.position.x = pos.x || 0
      this.position.y = pos.y || 0
      this.position.z = pos.z || 0
    }
    console.log(this.position, pos)
  }
}
