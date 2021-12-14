import { mapGetters, createNamespacedHelpers } from 'vuex'
import { FunNameMapType, StateFunMapRetType, useStateMapper } from './useMappers'

type UserGetter = {
    (moduleName: string, mapper: string[]): StateFunMapRetType
    (moduleName: string, mapper: Record<string, string>): StateFunMapRetType
}

/**
 * @param {*} moduleName 模块名称
 * @param {*} mapper getters属性集合 ['name', 'age']或 { f1: 'f11', f2: 'f22' }
 */
const useGetter: UserGetter = (moduleName: string, mapper: FunNameMapType) => {
    let mapperFn = mapGetters

    // 如果使用模块化，则使用vuex提供的createNamespacedHelpers方法找到对应模块的mapGetters方法
    if (Object.prototype.toString.call(moduleName) === '[object String]' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapGetters
    }

    return useStateMapper(mapper, mapperFn)
}

export { useGetter }
