<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function index()
    {
        return response()->view('spa');
    }
    public function lost()
    {
        return response()->view('spa',[],404);
    }
}