import React from 'react';
import {LinearProgress} from '@material-ui/core';
import { makeStyles, } from '@material-ui/core/styles';

interface OwnProps {
    clickCount: number,
    maxCount: number,
}

type Props = OwnProps

const useStyles = makeStyles(theme => ({
    root: {
      height: theme.spacing(4),
      // backgroundColor: theme.palette.background.default,
    },
  }));

export const ShowState : React.FC<Props> = props => {
    // const [progress, setProgress] = useState(0);
    let progressValue = props.clickCount / props.maxCount * 100;
    const classes = useStyles();
    
    return(
        <div>
            <label>残り時間</label>
            <div>
                <LinearProgress color="primary" variant="determinate" value={progressValue} classes={{root: classes.root}}/>
                <div className="displayingTimer">
                    <span className="Resting-Time">{props.clickCount}</span>
                </div>
            </div>
        </div>
    )
}