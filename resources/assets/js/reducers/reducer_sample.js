import {mapSample} from '../mappers/mapper_sample';
import {
    FETCH_SAMPLE, FETCH_SAMPLE_SUCCESS, FETCH_SAMPLE_FAILURE, abc
} from '../actions/action_sample';

const INITIAL_STATE = {
    sampleList: { samples: [], error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
    let error;

    switch (action.type) {

        case FETCH_SAMPLE:
            return { ...state, sampleList: { samples: [], loading: true, error: null }};
            break;
        case FETCH_SAMPLE_SUCCESS:
            return { ...state, sampleList: { samples: mapSample(action.payload), error: null, loading: false}};
            break;
        case FETCH_SAMPLE_FAILURE:
            error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
            return { ...state, sampleList: { samples: [], error: error, loading: false }};
            break;
        default:
            return state;
    }
}