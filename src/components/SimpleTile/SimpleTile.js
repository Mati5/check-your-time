import React from 'react';

import LogoTest from '../../assets/images/loginPage/logo.png';
import { SimpleTileStyle } from './style';

const SimpleTile = (props) => {
    const { children, link } = props;

    return(
        <SimpleTileStyle.Link to={link}>
            <SimpleTileStyle>
                <SimpleTileStyle.Icon>
                    <img src={LogoTest} alt="" />
                </SimpleTileStyle.Icon>
                <SimpleTileStyle.Title>
                    {children}
                </SimpleTileStyle.Title>
            </SimpleTileStyle>
        </SimpleTileStyle.Link>
    );
}

export default SimpleTile;