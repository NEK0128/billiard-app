import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory()

export const TextInputActions = {
    tick: actionCreator('ACTION_TICK'),
    pauseTick: actionCreator('ACTION_PAUSE_TICK'),
    addExtTimeCountDown: actionCreator('ACTION_ADD_EXT_TIME_COUNT_DOWN'),
    start35CountDown: actionCreator('ACTION_START_35_COUNT_DOWN'),
    start60CountDown: actionCreator('ACTION_START_60_COUNT_DOWN'),
    start180CountDown: actionCreator('ACTION_START_180_COUNT_DOWN'),
}