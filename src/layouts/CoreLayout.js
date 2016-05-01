import React from 'react';
import '../styles/core.less';
import contactUsActions from 'redux/modules/actions/contactUsActions';

import {NavBar, Footer} from 'components';

import NavBarConstants from 'constants/NavBarConstants';


export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  constructor(props){
    super(props);
    console.log('contactUsActions',contactUsActions);
  }

  render () {

    return (
      <div>
        <NavBar
          hashes={NavBarConstants.hashes}
          items={NavBarConstants.items}
          location={this.props.location}
        />
        <div className='root-container'>
          {this.props.children}
        </div>
        <Footer
          contactUsActions={contactUsActions}/>
      </div>
    );
  }
}
