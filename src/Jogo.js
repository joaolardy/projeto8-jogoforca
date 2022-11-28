import palavras from "./palavras";
function Jogo(props) {

    function escolherPalavra(){
        let elementoAleatorio = palavras[Math.floor(Math.random() * palavras.length)];
        props.setPalavraAleatoria(elementoAleatorio);
        transformaPalavraEmArray(elementoAleatorio);
    }
    function transformaPalavraEmArray(palavraRecebida){
        let arrayDaPalavra = palavraRecebida.split('');
        props.setArrayPalavra(arrayDaPalavra);

    }
    function imprimirPlacar(){
        let placar = props.palavraOculta;
        for(let i = 0; i < props.arrayPalavra.length; i++){
            if(props.arrayPalavra[i] !== props.letraClicada){ 
                placar += '_ '}
            if(props.arrayPalavra[i] === props.letraClicada){
                placar += props.letraClicada;
            }
        }
        return(placar);
    }

    return (
        <div className="jogo">
            <img className="imagem-forca" src={props.etapaForca} alt="forca" />
            <div className="direita-jogo">
                <button className="botao-escolher-palavra" onClick={escolherPalavra}>Escolher palavra</button>
                <div className="placar">{imprimirPlacar()}</div>
            </div>
        </div>
    )
}
export default Jogo