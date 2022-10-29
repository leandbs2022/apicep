
function apiCep(){
const limpar = (endereco) =>{
    document.getElementById('cend').value = '';
    document.getElementById('cbar').value = '';
    document.getElementById('ccid').value = '';
    document.getElementById('cest').value = '';
}
const preencher = (endereco) =>{
    document.getElementById('cend').value = endereco.logradouro;
    document.getElementById('cbar').value = endereco.bairro;
    document.getElementById('ccid').value = endereco.localidade;
    document.getElementById('cest').value = endereco.uf;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const celValido = (ccel) => ccel.length == 11 && eNumero(ccel);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
var valor = document.getElementById('ccel').value

if(celValido(ccel)){

}else{
    alert('false')
    if(valor.length == 11)
    {
        var metade = 7 //Math.floor(valor.length / 2);
       var resultado = valor.substr(0,metade)+ "-" +valor.substr(metade);
       document.getElementById('ccel').value = resultado
    }

}
const pesquisarCep = async() => {
    limpar();
    const cep = document.getElementById('ccep').value.replace("-","");
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)){
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('cend').value = 'CEP não encontrado!';
        }else {
            preencher(endereco);
        }
    }else{
        document.getElementById('cend').value = 'CEP incorreto!';
    }
}
document.getElementById('ccep').addEventListener('focusout',pesquisarCep)
}


