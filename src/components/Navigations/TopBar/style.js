import styled from 'styled-components'
import { rem } from '../../../helpers/helpers';

const TopBarStyle = styled.div`
    background-color: #3f51b5;
    width: 100%;
    color: #fff;
    font-size: ${rem(21)};
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`;

const Title = styled.h2`
    align-self: center;
    color: #fff;
    font-size: ${rem(21)};
    font-weight: bold;
    display: none;

    @media(min-width: 768px) {
        display: block;
    }

    &:hover {
        color: #fff;
        text-decoration: none;
    }
`;

const TopBarRight = styled.div`
    padding: ${rem(5)} ${rem(15)};
`;

TopBarStyle.Title = Title;
TopBarStyle.Right = TopBarRight;

export { TopBarStyle };