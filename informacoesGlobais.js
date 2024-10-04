const url = `https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json`
Console.log(url);
async function visualizarinformacoesGlobais () {
    const res = await fetch (url) ;
    const dados = await res.json()
    const paragrafo = document.createelement (`p`) 
    paragrafo.classlist.add(`graficos-container___texto`)
paragrafo.innerHTML = `voce sabia que o mundo Tem 
<span>${dados.total_pessoas_mundo}</span> de pessoas e 
    que aproxidamente <span>${dados.total_pessoas_conectados} 
    estão conectadas}</span>estão conectadas em alguma rede social e passam em média
    <span>${dados.tempo_medio}</span> horas conectadas.`
const container = document.getelementById (`graficos-container`)
container .appendChld(paragrafo)
}
visualizarinformacoesGlobais()