function gerarRecibo(){

    if (
        document.getElementById('emitente').value === '' ||
        document.getElementById('nome').value === '' ||
        document.getElementById('valor').value === '' ||
        document.getElementById('tipo_pagamento').value === ''
    ) {
        alert('Por favor, preencha todos os campos antes de gerar o recibo.');
        return;
    }
    
    document.getElementById('recibo_emitente').innerHTML = document.getElementById('emitente').value;
    document.getElementById('recibo_nome').innerHTML = document.getElementById('nome').value;
    document.getElementById('recibo_valor').innerHTML = parseFloat(document.getElementById('valor').value).toLocaleString('pt-br', {minimumFractionDigits: 2});
    document.getElementById('recibo_tipo_pagamento').innerHTML = document.getElementById('tipo_pagamento').value;
    document.getElementById('recibo_data').innerHTML = dataAtual();
    
    window.print();
}

function dataAtual(){
    let data = new Date();
    return data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear();
}
