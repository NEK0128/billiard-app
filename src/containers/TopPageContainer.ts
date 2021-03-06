import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TextInputActions } from "../actions";
import { TopPageForm } from "../components/TopPageForm";
import { AppState } from "../store";

export interface TopPageHandler {
    handleOnExtButtonClick(): void
    handleOn35ButtonClick(): void
    handleOn60ButtonClick(): void
    handleOn180ButtonClick(): void
    handleOnTick(): void
    handleOnPauseTick(): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        clickCount: appState.state.clickCount,
        maxCount: appState.state.maxCount,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnExtButtonClick: () => { dispatch(TextInputActions.addExtTimeCountDown()) },
        handleOn35ButtonClick: () => { dispatch(TextInputActions.start35CountDown()) },
        handleOn60ButtonClick: () => { dispatch(TextInputActions.start60CountDown()) },
        handleOn180ButtonClick: () => { dispatch(TextInputActions.start180CountDown()) },
        handleOnTick: () => { dispatch(TextInputActions.tick()) },
        handleOnPauseTick: () => { dispatch(TextInputActions.pauseTick()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm)