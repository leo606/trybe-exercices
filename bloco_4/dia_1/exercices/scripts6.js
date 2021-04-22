let peca = 'soldado'

switch (peca){
    case 'rei':
    case 'REI':
        console.log('Rei: Pode mover-se em qualquer direção, porém apenas uma casa por vez.');
        break;
    
    case 'dama':
    case 'DAMA':
        console.log('Dama: Assim como o Rei, pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres.');
        break;

    case 'torre':
    case 'TORRE':
        console.log('Torre: Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.');
        break;
    
    case 'bispo':
    case 'BISPO':
        console.log('Bispo: Move-se na diagonal, quantas casas quiser.');
        break;

    case 'cavalo':
    case 'CAVALO':
        console.log('Cavalo: O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”');
        break;

    case 'peao':
    case 'PEAO':
    case 'peão':
    case 'PEÃO':
        console.log('Peão: Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas.');
        break;

    default:
        console.log('é dama')
}