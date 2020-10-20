import React, { useState } from 'react';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/Auth/actions';
import TopBar from '../../components/Navigations/TopBar/TopBar';
import { TopBarStyle } from '../../components/Navigations/TopBar/style';
import DefaultList from '../../components/Navigations/DefaultList/DefaultList';
import { DashboardStyle } from '../Dashboard/style';
import Avatar from '../../components/Avatar/Avatar';
import ProfileMenu from '../../components/Navigations/ProfileMenu/ProfileMenu';
import DefaultAvatar from '../../assets/images/default-avatar.png';

const Home = React.lazy(() => import('../Home/Home'));
const Timer = React.lazy(() => import('../Timer/Timer'));

export const SingleTimer = () => {
    let { timerId } = useParams();

    return(
        <div>
            <h3>{timerId}</h3>
        </div>
    );
}

const Dahboard = ({ logout }) => {
    let { path } = useRouteMatch();

    const [anchorElPMenu, setAnchorElPMenu] = useState(null);


    const handleClosePMenu = () => {
        setAnchorElPMenu(null);
    };

    const handleClickPMenu = event => {
        setAnchorElPMenu(event.currentTarget);
    };


    const routes = (
        <Switch>
            <Route path={`${path}`} exact component={Home} />   
            <Route path={`${path}/timer`} exact  component={Timer} />
            <Route path={`${path}/timer/:timerId`} component={SingleTimer} />       
        </Switch>
    );

    return(
        <React.Fragment>
            <TopBar>
                <DefaultList />
                <TopBarStyle.Title as={Link} to={'/'}>Check your time</TopBarStyle.Title>
                <TopBarStyle.Right>
                    <Avatar imgUrl={DefaultAvatar} 
                            aria-controls="fade-menu" 
                            aria-haspopup="true" 
                            onClick={handleClickPMenu} />

                    <ProfileMenu anchorEl={anchorElPMenu} 
                                 handleClose={handleClosePMenu} 
                                 logout={logout} />
                </TopBarStyle.Right>
            </TopBar>
            <DashboardStyle>
                {routes}
            </DashboardStyle>
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    
  });

const mapDispatchToProps = {
    logout,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Dahboard);