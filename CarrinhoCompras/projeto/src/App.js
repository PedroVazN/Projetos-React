import React, { useState } from "react";
import "./App.css";
import ProdutosList from "./Components/ProdutosList";
import Carrinho from "./Components/Carrinho";
import produtos from "./Components/produtosData";
import Header from "./Components/Header";
import Banner from "./Components/banner";
import Footer from "./Components/Footer"; 

/* nathan */

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarProduto = (produto) => { 
    setCarrinho([carrinho, produto]);
  };

  const removerProduto = (posicao) => {
    // Define uma função chamada "removerProduto" que recebe um argumento "posicao".
  
    const novoCarrinho = carrinho.filter((_, index) => index !== posicao);
    // Cria uma nova variável "novoCarrinho" usando o método "filter" no array "carrinho".
    // O método "filter" percorre cada elemento do array e cria um novo array com os elementos que atendem a uma determinada condição.
    // Neste caso, estamos filtrando o array "carrinho" para excluir o elemento na posição "posicao".
    // O segundo parâmetro da função de callback é "index", que representa a posição do elemento no array.
    // A condição "index !== posicao" verifica se o índice do elemento não é igual à posição que desejamos remover.
    // Isso significa que o elemento na posição "posicao" será excluído do novo array "novoCarrinho".
  
    setCarrinho(novoCarrinho);
    // Usamos a função "setCarrinho" (provavelmente é uma função de um hook de estado) para atualizar o estado do carrinho com o novo array "novoCarrinho".
  };
  

  /* pedro */
  
  const calcularTotal = () => {
    return carrinho.reduce((total, produto) =>  total + produto.preco, 0);
  };


  return (
    <div className="App">

      <Header />
      <Banner/>
  
      <div className="content" id="produtosSection">

        <ProdutosList 
          produtos={produtos} 
          adicionarProduto={adicionarProduto} />
        <Carrinho
          carrinho={carrinho}
          removerProduto={removerProduto}
          calcularTotal={calcularTotal}

        />
      </div>
      <Footer /> {/* Adicione o componente Footer aqui */}

    </div>
  );
}

export default App;

