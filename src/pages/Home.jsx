import { getProducts } from "../local_backend/products.js";
import { Link } from "react-router-dom";

export default function Home() {
  const products = getProducts();
  const categoriesRoutes = {
    Accesorii: "/accesories",
    Linii: "/lines",
    Lansete: "/rods",
    Carlige: "/hooks",
    "Momeala-artificiala": "/momealaartificiala",
    Mulinete: "/mulinete",
    Plumbi: "/plumbi",
  };
  const categories = [...new Set(products.map((p) => p.category))];
  const previewProducts = categories.map((category) =>
    products.find((p) => p.category === category),
  );
  // aici filtrez produsele sa apara doar 1 per categorie in home page
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to Fishing Shop Romania</h1>
        <p className="home-subtitle">
          Your one-stop shop for all fishing needs!
        </p>
      </div>
      <div className="container">
        <h2 className="page-title">
          Fishing Products
          <div className="products-grid">
            {/*using the preview products to see only 1 item per category on home page (filtering)*/}
            {previewProducts.map((product) => (
              <div className="product-card-content" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-card-image"
                />
                <h3 className="product-card-name">{product.name}</h3>
                <p className="product-card-description">
                  {product.description}
                </p>

                {/* view details for evry category*/}
                <div className="product-card-actions">
                  <Link
                    className="btn btn-secondary"
                    to={categoriesRoutes[product.category] || "/"}
                  >
                    View products for this {product.category}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </h2>
      </div>
    </div>
  );
}
