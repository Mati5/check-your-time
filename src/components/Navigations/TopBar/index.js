import React from 'react';

import { TopBarStyle } from './style';

const TopBar = (props) => {
    
    return(
        <TopBarStyle>
            {props.children}
        </TopBarStyle>
    );
}

export default TopBar;