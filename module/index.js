import Vue from 'vue'

const Components = { }

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})

export default Components
