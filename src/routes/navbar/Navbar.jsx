import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
// import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
// import { signOutUser } from '../../utils/firebase.utils';

import './navbar.styles.scss';
import { UserContext } from '../../context/userContext';

const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  // const signOutHandler = async () => {
  //   await signOutUser();
  //   setCurrentUser(null);
  // };

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          Fashion-Mania
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' >
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;