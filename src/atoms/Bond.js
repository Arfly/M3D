export class Bond {
  constructor (eleOwn, eleOther) {
    if (!eleOwn || !eleOther) {
      console.error('缺少原子对象形成共价键')
      return false
    }
    this.name = eleOwn.atom + '-' + eleOther.atom
    this.start = {
      'x': eleOwn.position.x,
      'y': eleOwn.position.y,
      'z': eleOwn.position.z
    }
    this.end = this.getMiddlePoint(eleOwn.position, eleOther.position)
    this.position = this.getMiddlePoint(this.start, this.end)
    this.belong = eleOwn
    this.color = eleOwn.color
    this.length = this.getLength(this.start, this.end)
    this.direction = this.getDirection()
  }

  getLength (pos1, pos2) {
    let X2 = (pos1.x - pos2.x) * (pos1.x - pos2.x)
    let Y2 = (pos1.y - pos2.y) * (pos1.y - pos2.y)
    let Z2 = (pos1.z - pos2.z) * (pos1.z - pos2.z)
    return Math.sqrt(X2 + Y2 + Z2)
  }

  getMiddlePoint (pos1, pos2) {
    return {
      x: (pos1.x + pos2.x) / 2,
      y: (pos1.y + pos2.y) / 2,
      z: (pos1.z + pos2.z) / 2
    }
  }

  getDirection (pos1, pos2) {
    return {
      x: (this.end.x - this.start.x),
      y: (this.end.y - this.start.y),
      z: (this.end.z - this.start.z)
    }
  }
}
