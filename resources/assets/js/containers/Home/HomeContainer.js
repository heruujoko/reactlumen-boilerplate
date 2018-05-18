import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    fetchSample, fetchSampleSuccess, fetchSampleFailure
} from '../../actions/action_sample';

import HomeComponent from '../../components/HomeComponent';

function mapStateToProps (globalState) {
    return {
        sampleList: globalState.sample.sampleList
    };
}

function mapDispatchToProps (dispatch) {
    const actions = bindActionCreators({
        fetchSample, fetchSampleSuccess, fetchSampleFailure
    }, dispatch);

    return {
        fetchSample: () => {
            actions.fetchSample().then(response => {
                !response.error
                    ? actions.fetchSampleSuccess(response.payload)
                    : actions.fetchSampleFailure(response.payload);
            });
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);