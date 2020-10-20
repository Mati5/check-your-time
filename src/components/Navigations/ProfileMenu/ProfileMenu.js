import React from 'react';

import Menu from '@material-ui/core/Menu';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

import { ProfileMenuStyle } from './style';

const ProfileMenu = props => {

    return (
        <Menu getContentAnchorEl={null} 
              transformOrigin={{ vertical: 'top',  horizontal: 'right',  }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
              id="profile-menu"
              anchorEl={props.anchorEl}
              keepMounted
              open={Boolean(props.anchorEl)}
              onClose={props.handleClose}
              onClick={props.handleClose}>
            <ProfileMenuStyle.Item>
                <ProfileMenuStyle.Link>
                    <ProfileMenuStyle.Icon>
                        <AccountBoxIcon />
                    </ProfileMenuStyle.Icon>
                    Account
                </ProfileMenuStyle.Link>
            </ProfileMenuStyle.Item>
            <ProfileMenuStyle.Item>
                <ProfileMenuStyle.Link>
                    <ProfileMenuStyle.Icon>
                        <SettingsIcon />
                    </ProfileMenuStyle.Icon>
                    Settings
                </ProfileMenuStyle.Link>
            </ProfileMenuStyle.Item>
            <ProfileMenuStyle.Item>
                <ProfileMenuStyle.Link onClick={() => props.logout()}>
                    <ProfileMenuStyle.Icon>
                        <ExitToAppIcon />
                    </ProfileMenuStyle.Icon>
                    Logout
                </ProfileMenuStyle.Link>
            </ProfileMenuStyle.Item>
        </Menu>
    );
};

ProfileMenu.propTypes = {
    
};

export default ProfileMenu;