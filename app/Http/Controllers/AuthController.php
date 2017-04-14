<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Helper\JWTHelper;
use Auth;
use App\User;

class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    public function signin(Request $request){
      $user = User::where('nik',$request->nik)->first();
      if($user){
        $token = JWTHelper::encode($user);
        $data = [
          'user' => $user,
          'token' => $token
        ];
        return response()->json($data);
      } else {
        return response()->json('user not found',404);
      }
    }
}
