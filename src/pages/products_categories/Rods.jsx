import { getProducts } from "../../local_backend/products";

export default function Rods() {
  const products = getProducts().filter((p) => p.category === "Lansete");

  return (
    <div className="page">
      <h2 className="page-title">Lansete</h2>
      <div className="products-grid">
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
          </div>
        ))}
      </div>
    </div>
  );
}
