import axios from 'axios';
import { waterfall } from 'async';
import store from './../store/store';

export function getRequest(url,action){
  waterfall([
    function(callback){
      console.log(store.getState());
      callback();
    }
  ],(err,token) => {
    action()
  })
}

export function postRequest(url,data,action,errAction){
  waterfall([
    function(callback){
      let token = store.getState().session.token;
      callback(null,token);
    }
  ],(err,token) => {
    axios.post(url,data,{
      'headers': {
        'Authorization': 'Bearer '+token
      }
    })
    .then(res => {
      action(res)
    })
    .catch(err => {
      errAction(err)
    })
  })
}
