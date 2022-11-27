import { useSelector } from 'react-redux'
import { RootState } from 'typings/store'
import type { TypedUseSelectorHook } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector