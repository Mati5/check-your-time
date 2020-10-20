import React from 'react';

import { AvatarStyle }  from './style';

const Avatar = (props) => {
    const { imgUrl, onClick } = props;

    return(
        <AvatarStyle onClick={onClick}>
            <AvatarStyle.Img>
                <img src={imgUrl} alt="" />
            </AvatarStyle.Img>
        </AvatarStyle>
    );
}

export default Avatar;