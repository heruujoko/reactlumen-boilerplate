<?php

namespace App\Helper;

use \Firebase\JWT\JWT;
use Carbon\Carbon;

class JWTHelper {

  public static function encode($user){
    $key = env('APP_KEY');
    $payload = array(
        "iss" => url('/'),
        "aud" => url('/'),
        "iat" => Carbon::now(),
        "user" => $user
    );
    return JWT::encode($payload,$key);
  }

}
