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

    if (ele && Atoms[ele]) {
      this.atom = ele
      this.radius = Atoms[ele].radius
      this.color = Atoms[ele].color
    }

    if (pos && pos.x && pos.y && pos.z) {
      this.position.x = pos.x
      this.position.y = pos.y
      this.position.z = pos.z
    }
  }
}
