import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as LmsLogo } from '../../assets/home-icon.svg';
import { ReactComponent as LoginLogo } from '../../assets/login-icon.svg';
import './navigation.styles.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <LmsLogo className="logo" />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/auth">
                        <LoginLogo />
                    </Link>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;