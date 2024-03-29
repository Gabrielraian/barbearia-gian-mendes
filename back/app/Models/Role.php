<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Role extends Model
{
    use HasFactory;
    protected $table = 'role';
    protected $fillable = ['name', 'created_at', 'updated_at'];
    public function users(): BelongsTo
    {
        return $this->belongsTo(User::class, 'role_id');
    }
}
