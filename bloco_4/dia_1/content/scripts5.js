let estadoPessoaCadidata = 'pipipopo';

switch (estadoPessoaCadidata) {
    case 'aprovada':
        console.log('Parabéns, você foi aprovada(o)!');
        break;

    case 'lista':
        console.log('Você está na lista de espera');
        break;
    
    case 'reprovada':
        console.log('Você foi reprovada(o) =(');
        break
    
    default:
        console.log('valor não identificado')
}