<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Schedule extends Model
{
    use HasFactory;
    protected $table = 'schedule';
    protected $fillable = ['created_at', 'updated_at', 'datetime', 'employee_id', 'service_id', 'consumer_id'];

    public function employees(): HasMany
    {
        return $this->hasMany(User::class, 'employee_id');
    }

    public function services(): HasMany
    {
        return $this->hasMany(Service::class, 'service_id');
    }

    public function consumer(): HasMany
    {
        return $this->hasMany(User::class, 'consumer_id');
    }
}
