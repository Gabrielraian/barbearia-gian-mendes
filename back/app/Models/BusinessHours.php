<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusinessHours extends Model
{
    use HasFactory;
    protected $table = 'business_hours';

    public function companies(): HasMany
    {
        return $this->hasMany(Company::class, 'company_id');
    }
}
