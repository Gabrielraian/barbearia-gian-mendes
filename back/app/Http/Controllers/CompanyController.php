<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function list()
	{
		$companies = Company::paginate(20);

        return response()->json($companies);
	}
}
