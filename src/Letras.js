
export default function Letras(props){
    const alfabeto = ['a' ,'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m' ,'n' ,'o' ,'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v' ,'w' ,'x' ,'y' ,'z'];
    return(
        <div className="letras">
            {alfabeto.map((letra) => <BotaoLetra 
                    arrayPalavra={props.arrayPalavra}
                    setArrayPalavra={props.setArrayPalavra} 
                    letra={letra}
                    letraClicada={props.letraClicada}
                    setLetraClicada={props.setLetraClicada}
                    letrasClicadas={props.letrasClicadas}
                    setLetrasClicadas={props.setLetrasClicadas}
                    /> )}
        </div>
    )
}

function BotaoLetra(props){  
    function verificaLetra(letraEscolhida){
        let letrasTotais = [...props.letrasClicadas];
        letrasTotais.push(letraEscolhida);
        props.setLetraClicada(letraEscolhida);
        props.setLetrasClicadas(letrasTotais);
        
    } 

    return(
        <div className="botao-letra" onClick={() => verificaLetra(props.letra)}>{props.letra}</div>
    )
}