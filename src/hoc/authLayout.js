import React from 'react';

import LoginLogo from '../assets/images/loginPage/logo.png';
import { AuthPageStyle } from '../containers/AuthPage/style';

function authLayout(WrappedComponent) {
   
    class Authenticate extends React.Component {
        constructor(props) {
            super();
        }

        render() {
            const { onSubmit, ...otherProps} = this.props;

            return(
                <React.Fragment>
                    <AuthPageStyle>
                        <AuthPageStyle.Left>
                            <AuthPageStyle.Logo>
                                <img src={LoginLogo} alt="" />
                            </AuthPageStyle.Logo>
                        </AuthPageStyle.Left>
                        <AuthPageStyle.LogoMobile>
                            <img src={LoginLogo} alt="" />
                        </AuthPageStyle.LogoMobile>
                        <AuthPageStyle.Right>
                            <WrappedComponent onSubmit={onSubmit} 
                                              {...otherProps} />
                        </AuthPageStyle.Right>
                    </AuthPageStyle>
                </React.Fragment>
            )
        }
    }

    return Authenticate;
}

export default authLayout;