<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class User extends Model
{
    use HasFactory;
    protected $table = 'user';
    protected $fillable = ['created_at', 'updated_at', 'name', 'cellphone', 'email', 'password', 'role_id', 'company_id'];

    public function schedule_employees(): BelongsTo
    {
        return $this->belongsTo(Schedule::class, 'employee_id');
    }

    public function schedule_consumers(): BelongsTo
    {
        return $this->belongsTo(Schedule::class, 'consumer_id');
    }

    public function companies(): HasMany
    {
        return $this->hasMany(Company::class, 'company_id');
    }

    public function roles(): HasMany
    {
        return $this->hasMany(Role::class, 'role_id');
    }
    public function getUsers()
    {
        return User::all();
    }
}
