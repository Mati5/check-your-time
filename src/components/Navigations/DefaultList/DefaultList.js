import React from 'react';
import { useRouteMatch } from 'react-router-dom';

import HomeIcon from '@material-ui/icons/Home';
import { DefaultListStyle } from './style';

const DefaultList = (props) => {
    let { url } = useRouteMatch();

    return(
        <DefaultListStyle>
            <DefaultListStyle.El>
                <DefaultListStyle.Link to={`${url}`} exact={true}>
                   <HomeIcon />
                </DefaultListStyle.Link>
            </DefaultListStyle.El>
            <DefaultListStyle.El>
                <DefaultListStyle.Link to={`${url}/timer`} exact={true}>Timers</DefaultListStyle.Link>
            </DefaultListStyle.El>
            <DefaultListStyle.El>
                <DefaultListStyle.Link to={`${url}/timer/timer-1`}>Timer 1</DefaultListStyle.Link>
            </DefaultListStyle.El>
        </DefaultListStyle>
    );
}

export default DefaultList;