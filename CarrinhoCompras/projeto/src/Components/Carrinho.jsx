import React from 'react';

/**
 * O componente Carrinho exibe os produtos adicionados ao carrinho de compras.
 *
 * @param {Object[]} carrinho - A lista de produtos no carrinho.
 * @param {number} carrinho[].id - O ID do produto.
 * @param {string} carrinho[].nome - O nome do produto.
 * @param {number} carrinho[].preco - O preço do produto.
 * @param {Function} removerProduto - Uma função para remover um produto do carrinho.
 * @param {Function} calcularTotal - Uma função para calcular o valor total do carrinho.
 * 
 * @returns {JSX.Element} O componente React que exibe o carrinho de compras.
 */

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
