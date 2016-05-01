import React, { Component } from 'react';
import {Programs} from 'components';

export default class StocksContainer extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
      var requestObject = {
          "category": AppConstants.CURRICULUM_ID,
          "language":"English",
          "offset": 0,
          "length": 9
      }
      this.props.programsActions.getCurriculum(requestObject);
  }

  render() {
    return (
        <div>
          <Programs {...this.props} />
        </div>
      )
  }
}
