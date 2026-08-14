import { getProducts } from "../../local_backend/products";

export default function Mulinete() {
  const products = getProducts().filter((p) => p.category === "Mulinete");
  return (
    <div className="page">
      <h2 className="page-title">Mulinete</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card-content">
            <img
              src={product.image}
              alt={product.name}
              className="product-card-image"
            />
            <h3 className="product-card-title">{product.name}</h3>
            <p className="product-card-price">${product.price.toFixed(2)}</p>
            <p className="product-card-description">{product.description}</p>
            <div className="product-cart-actions">
              <button className="btn btn-primary">Add to CART</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
