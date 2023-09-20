 import React from 'react';
import BotaoAdicionarCarrinho from './BotaoAdicionar';

function ProdutosList({ produtos, adicionarProduto }) {
  return (
    <div className="produtos">
      <br></br>
      <br></br>
      <div className="produtos-lista">
        {produtos.map((produto) => (
          <div key={produto.id} className="produto-card">
            <img src={produto.imagem} alt={produto.nome} />
            <h3>{produto.titulo}</h3>
            <p>{produto.descricao}</p>
            <p>{produto.nome} - R${produto.preco.toFixed(2)}</p>
            <BotaoAdicionarCarrinho produto={produto} adicionarProduto={adicionarProduto} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProdutosList;
