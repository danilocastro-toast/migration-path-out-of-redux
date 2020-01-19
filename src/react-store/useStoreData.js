import { useContext, useMemo } from 'react'

const DEFAULT_OBJECT = {}

export default function useStoreData(context, mapDispatchToProps = DEFAULT_OBJECT) {
  const { getState, dispatch } = useContext(context)
  return useMemo(() => {
    const actions = {}
    Object.keys(mapDispatchToProps).forEach(actionName => {
      actions[actionName] = (...args) => dispatch(mapDispatchToProps[actionName](...args))
    })

    return [getState(), actions]
  }, [mapDispatchToProps, getState, dispatch])
}