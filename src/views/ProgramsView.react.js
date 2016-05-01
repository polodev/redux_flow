import React                  from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';
import programsActions            from 'redux/modules/actions/programsActions';

import {ProgramsContainer} from 'views';

function mapStateToProps(state) {
  return {
    programsInfo : state.programsInfo,
  };
}
const mapDispatchToProps = (dispatch) => ({
  programsActions : bindActionCreators(programsActions, dispatch)
});

export class ProgramsView extends React.Component {
  static propTypes = {
    programsInfo: React.PropTypes.object,
    programsActions: React.PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProgramsContainer
          {...this.props}
          />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgramsView);
