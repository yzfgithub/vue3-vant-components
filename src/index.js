import PageLoading from './pageLoading/index'
import CusButton from './cusButton/index'

const components = [
    PageLoading, CusButton
]

const install = function(Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}

export default { install }
