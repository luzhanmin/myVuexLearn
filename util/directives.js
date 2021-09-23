import store from '../store'

let result = []
function checkIndexof(target, val) {
    if (!target || target.length===0) {
        return result
    }
    for (var i=0; i<target.length; i++) {
        if (target[i].menuCode === val) {
            if (!result.includes(val)) {
                result.push(val)
            }
        } else {
            checkIndexof(target[i].child, val)
        }
    }
    return result
}

export default {
    has: {
        inserted: function(el, binding) {
            let authItem = store.getters.getUserInfo ? JSON.parse(store.getters.getUserInfo).authList : []
            let authList = checkIndexof(authItem, binding.value)
            if (!authList.includes(binding.value)) {
                el.remove()
            }
        }
    }
}
