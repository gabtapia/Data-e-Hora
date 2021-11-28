console.clear();
    
//Função que cria data e hora
function verHoraEData(){
    let data = new Date();
    let ano = data.getFullYear();
    let mes = data.getMonth()+1;
    let dia = data.getDate();
    let hora = new Date();
    let h = hora.getHours();
    let m = hora.getMinutes();
    let s = hora.getSeconds();
    m = zero(m);
    s = zero(s);

    //Printa no console a hora, data, e atualizações
    console.log(document.getElementById('relogio').innerHTML = h+':'+m+':'+s);
    console.log('');
    console.log(document.getElementById('data').innerHTML = dia+'/'+mes+'/'+ano);
    console.log('');
    console.log(atualiza = setTimeout('verHoraEData()', 500));
    console.log('');
}

function zero(x) {
    if(x < 10) {
         x = '0' + x;
    }
    return x;
}