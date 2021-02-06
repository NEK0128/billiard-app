import React from 'react';
import { LinearProgress } from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';

interface OwnProps {
    clickCount: number,
    maxCount: number,
}

type Props = OwnProps

const useStyles = makeStyles(theme => ({
    root: {
      height: theme.spacing(4),
    },
  }));

const EXTENSION_TIME = 60

export const ShowState : React.FC<Props> = props => {
    let progressValue = props.clickCount / (props.maxCount + EXTENSION_TIME) * 100;
    const classes = useStyles();
    
    return(
        <div>
            <label>残り時間</label>
            <div>
                <LinearProgress 
                    color="primary" 
                    variant="determinate" 
                    value={progressValue} 
                    classes={{root: classes.root}}
                />
                <div className="displayingTimer">
                    { props.clickCount > 10  
                        ? <span className="Resting-Time">{props.clickCount}</span>
                        : <span className="Resting-Rest-10-Times">{props.clickCount}</span>
                    }
                </div>
            </div>
        </div>
    )
}