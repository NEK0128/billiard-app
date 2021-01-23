import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { TextInputActions } from './actions';

export interface State {
    clickCount: number
}

export const initialState: State = {
    clickCount: 0
}

export const Reducer = reducerWithInitialState(initialState)
    .case(TextInputActions.start35CountDown, (state) => {
        return { ...state, clickCount: 35 }
    })
    .case(TextInputActions.start60CountDown, (state) => {
        return { ...state, clickCount: 60 }
    })
    .case(TextInputActions.start180CountDown, (state) => {
        return { ...state, clickCount: 180 }
    })
    .case(TextInputActions.addExtTimeCountDown, (state) => {
        return { ...state, clickCount: state.clickCount + 30 }
    })
    .case(TextInputActions.tick, (state) => {
        return { ...state, clickCount: state.clickCount > 0 ? state.clickCount - 1 : 0 }
    })