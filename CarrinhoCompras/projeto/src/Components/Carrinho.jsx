import React from 'react';

function Carrinho({ carrinho, removerProduto, calcularTotal }) {
  return (
    <div className="carrinho">
      <h2>Carrinho de Compras</h2>
      <div className="carrinho-lista">
        {carrinho.map((produto, index) => (
          <div key={index} className="carrinho-item">
            <p>{produto.nome} - R${produto.preco.toFixed(2)}</p>
            <button onClick={() => removerProduto(index)}>Remover</button>
          </div>
        ))}
      </div>
      
      <h3>Valor Total: R${calcularTotal().toFixed(2)}</h3>
    </div>
  );
}

export default Carrinho;
