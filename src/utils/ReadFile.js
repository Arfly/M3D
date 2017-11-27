import {parse} from '@/utils/Parser'
import store from '@/store'

export function readFile (file) {
  console.log(file)
  if (!file) {
    return
  }

  let reader = new FileReader()
  reader.readAsText(file)
  store.dispatch('loadingFile')
  reader.onload = function () {
    store.dispatch('fileLoaded')
    parse(this.result)
  }
}
