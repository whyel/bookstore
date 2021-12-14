import { mapState, createNamespacedHelpers } from 'vuex'
import { FunNameMapType, StateFunMapRetType, useStateMapper } from './useMappers'

/**
 * @param {*} moduleName 模块名称
 * @param {*} mapper state属性集合 ['name', 'age']
 */
function useState (moduleName: string, mapper: FunNameMapType): StateFunMapRetType {
    let mapperFn = mapState

    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapState方法
    if (Object.prototype.toString.call(moduleName) === '[object String]' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState
    }

    return useStateMapper(mapper, mapperFn)
}

export { useState }
