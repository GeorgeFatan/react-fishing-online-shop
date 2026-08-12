
import { getProducts } from "../local_backend/products.js";
import { Link } from "react-router-dom";

export default function Home(){
    const products = getProducts();
    return <div className="page">
        <div className = "home-hero">
            <h1 className = "home-title">
                Welcome to Fishing Shop Romania
            </h1>
            <p className = "home-subtitle">
                Your one-stop shop for all fishing needs!
            </p>
        </div>
        <div className = "container">
            <h2 className="page-title">
                Fishing Products
                <div className="products-grid">
                    {products.map((product) => (
                        <div className="product-card-content" key={product.id}>
                            <img src={product.image} alt={product.name} className="product-card-image" />
                            <h3 className="product-card-name">{product.name}</h3>
                            <p className = "product-card-description">{product.description}</p>
                            <span className="product-card-price">{product.price.toFixed(2)} Euro</span>
                            <div className="product-card-actions">
                                <Link className="btn btn-secondary">View details..</Link>
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    ))}

                </div>
            </h2>
        </div>
    </div>
}