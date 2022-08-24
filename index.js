/**
 * @import readline biblioteca nativa para input e output em node.js
 * @var name matriz que comporta os inputs
 * @var x valor do eixo x, determinado por números aleatórios entre 0 e 5
 * @var y valor do eixo y, determinado por números aleatórios entre 0 e 5
 * @var d direção da sonda
 * @const moves inputs permitidos para interagir com o programa
 */


const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let name = [];
let x = Math.floor(Math.random() * (5 - 0 + 1) + 0)
let y = Math.floor(Math.random() * (5 - 0 + 1) + 0)
let d = 'N'
rl.setPrompt('Mova a sonda \n' + 5 + '' + 5 + '\n' + x + ' ' + '' + y + '' + ' ' + d + '\n');
rl.prompt();

/**
 * Usa readline eu escuto o evento line
 * Separa cada caracter do input em um index da array name
 * Verifica se está incluso na array com entradas permitidas
 * Cria um laço para verificar o índice de cada entrada da array name
 * Orienta o comportamento de acordo com valor do índice e orientação do desafio
 * Requisita novo input
 */

rl.on('line', (name) => {
    name = name.split("")
    const moves = ['L', 'R', 'M', 'P']

    for(let i = 0; i < name.length; i++){   
    if(moves.includes(name[i])){

        if(name[i] === 'L'){
            if(d === 'N'){
                d = 'W'
            }

            else

            if(d === 'W'){
                d = 'S'
            }

            else

            if(d === 'S'){
                d = 'E'
            }

            else

            if(d === 'E'){
                d = 'N'
            }
        }

        else

        if(name[i] === 'R'){
            if(d === 'N'){
                d = 'E'
            }

            else

            if(d === 'E'){
                d = 'S'
            }

            else

            if(d === 'S'){
                d = 'W'
            }

            else

            if(d === 'W'){
                d = 'N'
            }
        }

        else

        if(name[i] === 'M'){
            if(d === 'N'){
                y++
            }

            else

            if(d === 'E'){
                x++
            }

            else

            if(d === 'S' && y > 0){
                y--
            }

            if(d === 'W' && x > 0){
                x--
            }
        }

    }else{
        console.log(name[i] + 'não é uma entrada válida')
    }   
    }
    console.log('Sua posição é: x=' + x + ' ' + 'e y=' + ' ' +  y + '\n')
    console.log('Sua direção é:' + d + '\n')
    if(x < 0){
        console.log('Fora da zona de pouso' + x)
    }

    if(y < 0){
        console.log('Fora da zona de pouso' + y)
    }
    rl.prompt()
})