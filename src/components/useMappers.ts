import { useStore, Mapper, Computed, MapperWithNamespace, MapperForState, MapperForStateWithNamespace, ActionMethod, MapperForAction, MapperForActionWithNamespace, MutationMethod, MapperForMutation, MapperForMutationWithNamespace } from 'vuex'
import { computed, ComputedRef } from 'vue'

type FunNameMapType = string[] | Record<string, string>
type StateFunMapType = Mapper<Computed> & MapperWithNamespace<Computed> & MapperForState & MapperForStateWithNamespace
type StateFunMapRetType = { [x: string]: ComputedRef<Computed>}

// 将['abc', 'xyz']转换成{abc:'abc', xyz:'xyz'}
function FmtMapStr (mapper: FunNameMapType) : Record<string, string> {
    if (Array.isArray(mapper)) {
        const r: Record<string, string> = {}
        mapper.forEach((val) => { r[val] = val })
        return r
    } else {
        return mapper
    }
}

function useStateMapper (mapper: FunNameMapType, mapFn: StateFunMapType): StateFunMapRetType {
    const store = useStore()
    const storeStateFns = mapFn(FmtMapStr(mapper))

    const storeState: { [x: string]: ComputedRef<Computed> } = {}
    Object.keys(storeStateFns).forEach(fnKey => {
        // vuex源码中mapState和mapGetters的方法中使用的是this.$store,所以更改this绑定
        const fn = storeStateFns[fnKey].bind({ $store: store })
        storeState[fnKey] = computed(fn)
    })

    return storeState
}

type ActionFunMapType = Mapper<ActionMethod> & MapperWithNamespace<ActionMethod> & MapperForAction & MapperForActionWithNamespace
type ActionFunMapRetType = { [x: string]: ActionMethod}
function useActionMapper (mapper: FunNameMapType, mapFn: ActionFunMapType): ActionFunMapRetType {
    const store = useStore()

    const storeActionsFns = mapFn(FmtMapStr(mapper))

    const storeAction: { [x: string]: ActionMethod } = {}

    Object.keys(storeActionsFns).forEach(fnKey => {
        storeAction[fnKey] = storeActionsFns[fnKey].bind({ $store: store })
    })

    return storeAction
}

type MutationFunMapType = Mapper<MutationMethod> & MapperWithNamespace<MutationMethod> & MapperForMutation & MapperForMutationWithNamespace
type MutationFunMapRetType = { [x: string]: MutationMethod}
function useMutationMapper (mapper: FunNameMapType, mapFn: MutationFunMapType): MutationFunMapRetType {
    const store = useStore()

    const storeMutationsFns = mapFn(FmtMapStr(mapper))

    const storeMutation: { [x: string]: MutationMethod } = {}

    Object.keys(storeMutationsFns).forEach(fnKey => {
        storeMutation[fnKey] = storeMutationsFns[fnKey].bind({ $store: store })
    })

    return storeMutation
}

export {
    FunNameMapType, StateFunMapType,
    StateFunMapRetType, useStateMapper,
    ActionFunMapType, ActionFunMapRetType, useActionMapper,
    MutationFunMapType, MutationFunMapRetType, useMutationMapper
 }
