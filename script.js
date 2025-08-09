let botao = document.querySelector(".botaoMagica");

let webHook = "https://goncalves303gt.app.n8n.cloud/webhook/animacao-css";

cliqueNoBotao = async () => {
  let inputValue = document.querySelector(".input-animacao").value;
  let codigo = document.querySelector(".area-codigo");
  let areaResultado = document.querySelector(".area-resultado");

  botao.disable = true;
  botao.textContent = "Gerando...";
  botao.style.background = "#888";
  let resposta = await fetch(webHook, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, // Diz que estamos enviando JSON
    body: JSON.stringify({ pergunta: inputValue }),
  });

  let resultado = await resposta.json();
  //   botao.disabled = true;
  let info = JSON.parse(resultado.resposta);

  console.log(info);

  codigo.innerHTML = info.code;
  areaResultado.innerHTML = info.preview;

  document.head.insertAdjacentHTML(
    "beforeend",
    "<style>" + info.style + "</style>"
  );

  botao.disable = false;
  botao.textContent = "Criar Mágico✨";
  botao.style.background = "#1fef1f";
};
