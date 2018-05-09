import axios from '../utilities/helpers';
import {API_URL} from '../utilities/constants';

export const FETCH_SAMPLE = "FETCH_SAMPLE";
export const FETCH_SAMPLE_SUCCESS = "FETCH_SAMPLE_SUCCESS";
export const FETCH_SAMPLE_FAILURE = "FETCH_SAMPLE_FAILURE";

export function fetchSample () {
    const request = axios ({
        method: 'GET',
        url: `${API_URL.SAMPLE}`
    });

    return {type: FETCH_SAMPLE, payload: request};
}

export function fetchSampleSuccess (data) {
    return {type: FETCH_SAMPLE_SUCCESS, payload: data};
}

export function fetchSampleFailure (error) {
    return {type: FETCH_SAMPLE_FAILURE, payload: error};
}

