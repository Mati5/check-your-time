import styled from 'styled-components';
import { rem } from '../../helpers/helpers';

const AvatarStyle = styled.div`
    
`;

const AvatarImg = styled.div`
    width: ${rem(40)};
    height: ${rem(40)};
    border-radius: 50%;
    overflow: hidden;

    &:hover {
        cursor: pointer;
    }

    img {
        max-width: 100%;
    }   
`;

AvatarStyle.Img = AvatarImg;

export { AvatarStyle };