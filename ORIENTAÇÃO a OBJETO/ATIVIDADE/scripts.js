/* Atividade: Conta Bancária
Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
Dentro de ContaBancaria, construa o getter e o setter de saldo;
Dentro de ContaBancaria, crie os métodos sacar e depositar;
Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais. */


class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação Negada';
        }
        this._saldo = this.saldo - valor; 

        return this._saldo;
}

   depositar(valor){
       this._saldo = this._saldo + valor;

       return this._saldo;
   }
 
}

class ContaCorrent extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito){
        super(agencia, numero, saldo);    // classe super manda tudo que receber para a claase pai
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor; 
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);    // classe super manda tudo que receber para a claase pai
        this.tipo = 'poupança';
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);    // classe super manda tudo que receber para a claase pai
        this.tipo = 'universitária';
    }

    sacar(valor){
        if (valor > 500){
            return "operação Negada!"
        }

        this._saldo = this._saldo - valor; 
    }

}



/*______ TESTES OS COMANDOS NO NAVEGADOR____ ATALHO CRTL + SHIFT + I no navegador___

const minhaConta = new ContaCorrent(1, 234, true)

minhaConta.saldo
0
minhaConta.depositar(1000)
1000

minhaConta.saldo
1000

minhaConta.sacar(600)
400

minhaConta.saldo
400

const contaPoup = new ContaPoupanca(1, 22)

const contaUni = new ContaUniversitaria(1, 22)

contaUni.depositar(1000)

contaUni.sacar(550)
