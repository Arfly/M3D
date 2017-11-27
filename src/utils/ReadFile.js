import {parse} from '@/utils/Parser'

export function readFile (file) {
  if (!file) {
    return
  }

  let reader = new FileReader()
  reader.readAsText(file)
  reader.onload = function () {
    parse(this.result)
  }
}
