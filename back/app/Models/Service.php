<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Service extends Model
{
    use HasFactory;
    protected $table = 'service';
    protected $fillable = ['name', 'description', 'created_at', 'updated_at'];

    public function schedule_services(): BelongsTo
    {
        return $this->belongsTo(Schedule::class, 'service_id');
    }
}
