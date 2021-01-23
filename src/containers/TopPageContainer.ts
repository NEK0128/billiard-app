import { connect } from "react-redux";
import { Dispatch } from "redux";
import { TextInputActions } from "../actions";
import { TopPageForm } from "../components/TopPageForm";
import { AppState } from "../store";

export interface TopPageHandler {
    handleOnClick(): void
    handleOn35ButtonClick(): void
    handleOn60ButtonClick(): void
    handleOn180ButtonClick(): void
}

const mapStateToProps = (appState: AppState) => {
    return {
        clickCount: appState.state.clickCount
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOnClick: () => { dispatch(TextInputActions.updateClickCount()) },
        handleOn35ButtonClick: () => { dispatch(TextInputActions.start35CountDown()) },
        handleOn60ButtonClick: () => { dispatch(TextInputActions.start60CountDown()) },
        handleOn180ButtonClick: () => { dispatch(TextInputActions.start180CountDown()) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopPageForm)