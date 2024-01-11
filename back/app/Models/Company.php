<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Company extends Model
{
    use HasFactory;
    protected $table = 'company';

    public function business_hours(): BelongsTo
    {
        return $this->belongsTo(BusinessHours::class, 'company_id');
    }

    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'company_id');
    }
}
