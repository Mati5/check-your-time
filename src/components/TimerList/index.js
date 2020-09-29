import React from 'react';
import Timer from './Timer/index';
import { TimerListStyle } from './style';

const TimerList = (props) => {

    return (
        <TimerListStyle>
            {props.data.map((timer) => (
                <Timer  key={`timer-${timer.id}`} 
                        timer={timer} 
                        onTimerChange={props.onTimerChange} 
                        displayEditTimerModal={props.displayEditTimerModal} />
            ))}
        </TimerListStyle>
    );
};

export default TimerList;