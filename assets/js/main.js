function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = function(){
        this.cliqueBotoes();
    }

    this.cliqueBotoes = function(){
        document.addEventListener('click', function(e){
            const el = e.target;
            if(el.classList.contains('btn-num')){
                this.addNum(el.innerText);
            }
            if(el.classList.contains('btn-clear')){
                this.limpaTela();
            }
            if(el.classList.contains('btn-del')){
                this.apaga();
            }
            if(el.classList.contains('btn-eq')){
                this.realizaConta();
            }
        }.bind(this));
    }

    this.addNum = function(valor){
        this.display.value += valor;
    }

    this.limpaTela = function(){
        this.display.value = '';
    }

    this.apaga = function(){
        this.display.value = this.display.value.slice(0,-1);
    }

    this.realizaConta = function(){
        this.display.value = eval(this.display.value);
    }
}

const iniciaCalculadora = new Calculadora();
iniciaCalculadora.inicia();