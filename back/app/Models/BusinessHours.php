<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class BusinessHours extends Model
{
    use HasFactory;
    protected $table = 'business_hours';
    protected $fillable = ['company_id', 'week_day', 'start', 'end', 'created_at', 'updated_at'];
    public function companies(): HasMany
    {
        return $this->hasMany(Company::class, 'company_id');
    }
}
