import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";
import palavras from "./palavras";
import React from 'react';


export default function App() {
  const [palavraAleatoria, setPalavraAleatoria] = React.useState('');
  const [arrayPalavra, setArrayPalavra] = React.useState([]);
  const [etapaForca, setEtapaforca] = React.useState("assets/forca0.png")
  const [letraClicada, setLetraClicada] = React.useState('');
  const [palavraOculta, setPalavraOculta] = React.useState('');
  const [letrasClicadas, setLetrasClicadas] = React.useState(['']);

  return (
    <>
      <Jogo
        palavraAleatoria={palavraAleatoria}
        setPalavraAleatoria={setPalavraAleatoria}
        arrayPalavra={arrayPalavra}
        setArrayPalavra={setArrayPalavra}
        etapaForca={etapaForca}
        setEtapaforca={setEtapaforca}
        letraClicada={letraClicada}
        setLetraClicada={setLetraClicada}
        palavraOculta={palavraOculta}
        setPalavraOculta={setPalavraOculta}
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
      />
      <Letras
        palavraAleatoria={palavraAleatoria}
        setPalavraAleatoria={setPalavraAleatoria}
        arrayPalavra={arrayPalavra}
        setArrayPalavra={setArrayPalavra}
        etapaForca={etapaForca}
        setEtapaforca={setEtapaforca}
        letraClicada={letraClicada}
        setLetraClicada={setLetraClicada}
        palavraOculta={palavraOculta}
        setPalavraOculta={setPalavraOculta}
        letrasClicadas={letrasClicadas}
        setLetrasClicadas={setLetrasClicadas}
      />
      <Chute />
    </>
  );
}
