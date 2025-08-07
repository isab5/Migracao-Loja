"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Header from "../components/Header/Header";
import { productsData } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Home() {
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(productsData.length);
  }, []);

  return (
    <div className={styles.page}>
      <Header
        title="Loja de Eletrônicos"
        subtitle="Os melhores produtos com os melhores preços!"
        totalProducts={totalProducts}
      />
      <div className={styles.products}>
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}