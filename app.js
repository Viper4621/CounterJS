//iniciar contador em 0
let count = 0;

//selecionando valor e botoes
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

//ao inves de criar 3 selectores podemos usar o forEach criando uma const para salvar e pegar o parametro btn de cada
//ao criar evento de click com  função e parametro (e) ao ser clicado ele vai saber com classlist foi acionada
//const styles = e.currentTaget.classList = vai nos retornar e salvar onde foi o click
//assim podemos criar if / else if / else usando (styles.contains("nome da class que usamos em nosso index")) para adicionar funções individuais ao inves de ter feito 3 funções uma para cada botão
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
