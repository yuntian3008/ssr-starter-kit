<?php

namespace App\Http\Controllers\Api\V1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\V1\Auth\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthenticatedSessionController extends Controller
{
    /**
     * Handle an incoming authentication request.
     *
     * @param  \App\Http\Requests\Auth\LoginRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LoginRequest $request)
    {
        $request->authenticate();

        $token = Auth::user()->createToken('user-token')->accessToken;
        //$request->session()->regenerate();

        return response()->json([
            'token' => $token->plainTextToken,
        ]);
    }

    /**
     * Destroy an authenticated session.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //Auth::guard('web')->logout();
        //Auth::user()->currentAccessToken()->delete();
        //$request->session()->invalidate();

        //$request->session()->regenerateToken();

        return response()->noContent();
    }
}
