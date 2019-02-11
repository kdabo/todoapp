import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../actions/user';
import {LOG_IN, LOG_OUT} from '../constants/routes';

import Button from '@material-ui/core/Button';

class Auth extends Component {
  render() {
    const { user, fetchUser } = this.props;
    return (
      <Link to={ user ? LOG_IN : LOG_OUT} >
        <Button onClick={fetchUser} variant='contained' color="default" size='small'>
          { user ? 'Logout' : 'Login' }
        </Button>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
};

const mapDispatchToProps = {
  fetchUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
