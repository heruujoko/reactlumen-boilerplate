<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Helper\JWTHelper;
use App\User;

class AuthController extends Controller
{
    /**
     * Create a new controller instance.
     */
    public function __construct()
    {
    }

    public function index()
    {
        $user = User::where('name', 'system')->first();
        $token = JWTHelper::encode($user);
        $data = [
            'user' => $user,
            'token' => $token,
        ];
        return view('app', $data);
    }

    public function signin(Request $request)
    {
        $user = User::where('email', $request->nik)->first();
        if ($user) {
            $token = JWTHelper::encode($user);
            $data = [
          'user' => $user,
          'token' => $token,
        ];

            return response()->json($data);
        } else {
            return response()->json('user not found', 404);
        }
    }
}
