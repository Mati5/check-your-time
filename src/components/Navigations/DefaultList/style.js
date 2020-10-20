import styled from 'styled-components';
import { rem } from '../../../helpers/helpers';
import { NavLink } from 'react-router-dom';

const DefaultListStyle = styled.ul`
    flex-shrink: 0; 
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
`;

const El = styled.li`
    border-right: 1px solid #fff;

    &:last-child {
        border-right: 0;
    }
`;

const ElLink = styled(NavLink)`
    background-color: transparent;
    width: 100%;
    height: 100%;
    color: #fdfdfd;
    font-size: ${rem(14)};
    padding: ${rem(10)} ${rem(15)};
    display: flex;
    align-items: center;
    transition: 0.1s background-color ease-in-out;

    &:hover,
    &.active {
        background-color: #fdfdfd;
        color: #000;
        text-decoration: none;
    }
`;

DefaultListStyle.El = El;
DefaultListStyle.Link = ElLink;

export { DefaultListStyle };