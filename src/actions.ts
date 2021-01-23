import { actionCreatorFactory } from 'typescript-fsa';

const actionCreator = actionCreatorFactory()

export const TextInputActions = {
    updateClickCount: actionCreator('ACTION_UPDATE_CLICK_COUNT'),
    start35CountDown: actionCreator('ACTION_START_35_COUNT_DOWN'),
    start60CountDown: actionCreator('ACTION_START_60_COUNT_DOWN'),
    start180CountDown: actionCreator('ACTION_START_180_COUNT_DOWN'),
}