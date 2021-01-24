import React from 'react'
import { TopPageHandler } from '../containers/TopPageContainer';
import { ShowState } from './ShowState';
import { SubmitButton } from './SubmitButton';

interface OwnProps {
    clickCount: number,
    maxCount: number,
}
type Props =  OwnProps & TopPageHandler
export class TopPageForm extends React.Component<Props> {

    constructor(props:any){
        super(props);
        this.timer();
    }
    render(){
        return(
            <React.Fragment>
                <ShowState clickCount={this.props.clickCount} maxCount={this.props.maxCount} />
                <SubmitButton title='Ext' onClick={this.props.handleOnExtButtonClick}/>
                <SubmitButton title='35' onClick={this.props.handleOn35ButtonClick}/>
                <SubmitButton title='60' onClick={this.props.handleOn60ButtonClick}/>
                <SubmitButton title='180' onClick={this.props.handleOn180ButtonClick}/>
                <SubmitButton title='一時停止/再生' onClick={this.props.handleOnPauseTick}/>
            </React.Fragment>
        )
    }

    timer(){
        setInterval(
            this.props.handleOnTick,
            1000
        );
    }
}