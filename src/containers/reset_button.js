import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {resetCount} from '../actions/index';

class ResetButton extends React.Component {
    
    render() {
        return (
            <div>
                <p></p>
                <button 
                className="btn btn-secondary"
                onClick={this.props.resetCount}
                >Reset</button>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {

    return bindActionCreators({resetCount:resetCount}, dispatch);
}

export default connect(null, mapDispatchToProps)(ResetButton);