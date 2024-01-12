<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase; //A sintaxe do TestCase do laravel é diferente do PHPUnit.

class ApiCompanyControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_companyControllerIndex_RetornaStatus200(): void
    {
        //Teste com enfase em agilidade, execute o metodo o mais rapido
        //possível para garantir que não há erros de execução.
        $response = $this->get('api/companyController/index');
        $response->assertStatus(200);
    }
    public function test_companyControllerIndex_RetornaDadosCorretos(): void
    {
        //Testes com enfase em persistensia , este teste é fragil á programação incremental e refatoração , e não permite modificar
        //o codigo com facilidade sem deixar de garantir que testes continuem passando
        //Deve-se deletar este teste futuramente caso haja qualquer modificação.
        $response = $this->get('api/companyController/index');
        $validarCamposRetornoApi = $response["links"][0];
        $this->assertArrayHasKey('url', $validarCamposRetornoApi);
        $this->assertArrayHasKey('label', $validarCamposRetornoApi);
        $this->assertArrayHasKey('active', $validarCamposRetornoApi);
    }
}
