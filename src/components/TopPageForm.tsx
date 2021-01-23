import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer';
import { ShowState } from './ShowState';
import { SubmitButton } from './SubmitButton';

interface OwnProps {
    clickCount: number

}
type Props =  OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {
    render(){
        return(
            <React.Fragment>
                <SubmitButton title='Click me' onClick={this.props.handleOnClick}/>
                <SubmitButton title='35' onClick={this.props.handleOn35ButtonClick}/>
                <SubmitButton title='60' onClick={this.props.handleOn60ButtonClick}/>
                <SubmitButton title='180' onClick={this.props.handleOn180ButtonClick}/>
                <ShowState clickCount={this.props.clickCount}/>
            </React.Fragment>
        )
    }
}