import { Atom } from '@/atoms/Atom'
import { Bond } from '@/atoms/Bond'
import store from '@/store'
import { Atoms } from '@/atoms/atom.config'

export function parse (fileTxt) {
  console.log('原始数据')
  console.log(fileTxt)
  store.dispatch('startParse')
  if (!fileTxt) {
    return false
  }

  let atomsArr = fileTxt.split('\n')// windows 平台换行符匹配有没问题

  let i = 0
  let len = atomsArr.length
  // 第一位原子数目、第二位分子名称需要参数校验
  let elesArr = []

  for (i = 2; i < len; i++) {
    atomsArr[i] = atomsArr[i].replace(/\s+/g, ' ')
    let tmpArr = atomsArr[i].split(' ')
    // console.log(tmpArr)
    let tmpPos = {
      'x': parseFloat(tmpArr[1]),
      'y': parseFloat(tmpArr[3]),
      'z': parseFloat(tmpArr[2])
    }
    // console.log(tmpPos)
    atomsArr[i] = new Atom(tmpArr[0], tmpPos)
    if (elesArr.indexOf(atomsArr[i].atom) === -1) {
      elesArr.push(atomsArr[i].atom)
    }
    // console.log(atomsArr[i])
  }
  
  let eleKindsLen = elesArr.length
  for (i = 0; i < eleKindsLen; i++) {
    let name = elesArr[i]
    elesArr[i] = {
      atom: name,
      radius: Atoms[name].radius,
      color: Atoms[name].color
    }
  }
  console.log(elesArr)
  let atomsNum = atomsArr.length
  for (i = 2; i < atomsNum; i++) {
    for (let j = 2; j < atomsNum; j++) {
      if (j === i) {
        continue
      }

      if (isBond(atomsArr[i], atomsArr[j])) {
        atomsArr[i].neighbors.push(atomsArr[j])
        let bond = new Bond(atomsArr[i], atomsArr[j])
        atomsArr[i].bonds.push(bond)
      }
    }
  }

  console.log('文件数据解析成功', atomsArr)
//   console.log(store)
  store.dispatch('endParse')
  store.dispatch('updateMoleculeData', atomsArr)
  store.dispatch('updateElementsData', elesArr)
}

function getAtomDistance (pos1, pos2) {
  let distanceX2 = (pos1.x - pos2.x) * (pos1.x - pos2.x)
  let distanceY2 = (pos1.y - pos2.y) * (pos1.y - pos2.y)
  let distanceZ2 = (pos1.z - pos2.z) * (pos1.z - pos2.z)

  return Math.sqrt(distanceX2 + distanceY2 + distanceZ2)
}

function getBondMaxDistance (atom1, atom2) {
  return (atom1.radius / 100 + atom2.radius / 100) * 1.2
}

function isBond (atom1, atom2) {
  let atomDistance = getAtomDistance(atom1.position, atom2.position)
  let maxBondDistance = getBondMaxDistance(atom1, atom2)
  return atomDistance < maxBondDistance
}
