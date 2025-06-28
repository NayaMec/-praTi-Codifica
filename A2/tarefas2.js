
// 1. Validação de Datas
function ehDataValida(dia, mes, ano) {
  if (ano < 1 || mes < 1 || mes > 12 || dia < 1) return false;
  const diasPorMes = [31, (anoBissexto(ano) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return dia <= diasPorMes[mes - 1];
}

function anoBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// 2. Jogo de Adivinhação
function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1;
  let palpite = 0;
  let tentativas = 0;
  while (palpite !== numeroSecreto) {
    palpite = parseInt(prompt("Adivinhe o número (1-100):"));
    tentativas++;
    if (palpite < numeroSecreto) {
      alert("Mais alto!");
    } else if (palpite > numeroSecreto) {
      alert("Mais baixo!");
    } else {
      alert(`Acertou em ${tentativas} tentativas!`);
    }
  }
}

// 3. Palavras Únicas
function palavrasUnicas(frase) {
  const palavras = frase.split(" ");
  const unicas = [];
  for (let i = 0; i < palavras.length; i++) {
    if (!unicas.includes(palavras[i])) {
      unicas.push(palavras[i]);
    }
  }
  return unicas;
}

//  Seção 2: Funções e Recursão 

// 4. Fatorial Recursivo
function fatorial(n) {
  if (n < 0) throw new Error("Número não pode ser negativo");
  if (n === 0) return 1;
  return n * fatorial(n - 1);
}

// 5. Debounce
function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// 6. Memoization
function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

// Arrays e Objetos Complexos

// 7. Mapeamento e Ordenação
function nomesOrdenados(produtos) {
  return produtos.slice().sort((a, b) => a.preco - b.preco).map(p => p.nome);
}

// 8. Agrupamento por Propriedade
function agruparPorCliente(vendas) {
  return vendas.reduce((acc, venda) => {
    acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
    return acc;
  }, {});
}

// 9. Conversão Entre Formatos
function paresParaObjeto(pares) {
  return Object.fromEntries(pares);
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}
