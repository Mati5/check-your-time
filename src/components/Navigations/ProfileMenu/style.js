import styled from 'styled-components';
import { rem } from '../../../helpers/helpers';

const ProfileMenuStyle = styled.div``;

const MenuItem = styled.li`
    
`;

const MenuLink = styled.div`
    width: 100%;
    height: 100%;
    color: #A9A9A9;
    font-size: ${rem(14)};
    font-weight: bold;
    padding: ${rem(8)} ${rem(18)};
    padding-right: ${rem(35)};
    display: block;
    transition: 0.2s background-color ease-in-out;
    display: flex;
    align-items: center;

    &:hover {
        background-color: rgba(0, 0, 0, 0.04);
        text-decoration: none;
        cursor: pointer;
    }
`;

const MenuIcon = styled.div`
    padding-right: ${rem(12)};
`;

ProfileMenuStyle.Item = MenuItem;
ProfileMenuStyle.Link = MenuLink;
ProfileMenuStyle.Icon = MenuIcon;

export { ProfileMenuStyle };