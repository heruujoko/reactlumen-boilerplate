import localStorage from 'localStorage'

export function isSignedIn(){
  let sessionStorage = localStorage.getItem('sessionStorage');
  if(sessionStorage == null){
    window.location = '/';
  } else {
    console.log('user authenticated.');
  }
}
