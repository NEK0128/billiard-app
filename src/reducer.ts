import { reducerWithInitialState } from '../node_modules/typescript-fsa-reducers';
import { TextInputActions } from './actions';

export interface State {
    isPlaying: boolean,
    clickCount: number
}

export const initialState: State = {
    isPlaying: false,
    clickCount: 0
}

export const Reducer = reducerWithInitialState(initialState)
    .case(TextInputActions.start35CountDown, (state) => {
        return { ...state, clickCount: 35, isPlaying: true}
    })
    .case(TextInputActions.start60CountDown, (state) => {
        return { ...state, clickCount: 60, isPlaying: true }
    })
    .case(TextInputActions.start180CountDown, (state) => {
        return { ...state, clickCount: 180, isPlaying: true }
    })
    .case(TextInputActions.addExtTimeCountDown, (state) => {
        return { ...state, clickCount: state.clickCount + 30, isPlaying: true }
    })
    .case(TextInputActions.tick, (state) => {
        if (state.isPlaying) {
            return { ...state, clickCount: state.clickCount > 0 ? state.clickCount - 1 : 0 }
        } else {
            return { ...state }
        }
    })
    .case(TextInputActions.pauseTick, (state) => {
        return { ...state, isPlaying: !state.isPlaying }
    })