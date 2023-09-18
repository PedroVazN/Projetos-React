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
    setCarrinho([...carrinho, produto]);
  };

  const removerProduto = (posicao) => {
    const novoCarrinho = carrinho.filter((_, index) => index !== posicao);
    setCarrinho(novoCarrinho);
  };

  /* pedro */

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.preco, 0);
  };

  const scrollToProdutos = () => {
    const produtosSection = document.getElementById("produtosSection");
    produtosSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">

      <Header />
      <Banner scrollToProdutos={scrollToProdutos} />
  
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

