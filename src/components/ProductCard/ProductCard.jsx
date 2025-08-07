import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageCard}>
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={180}
                        height={140}
                        loading="lazy"  
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span>{product.title.split(" ")[0]}</span>
                    </div>
                )}
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{product.title}</h2>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.description}>{product.description}</p>
                <div className={styles.rating}>
                    <span className={styles.stars}>
                        {Array.from({ length: Math.floor(product.rating.count) }).map(
                            (_, i) => (
                                <span key={i}>★</span>
                            )
                        )}
                        {product.rating.count % 1 >= 0.5 && <span>½</span>}
                    </span>
                    <span className={styles.ratingValue}>
                        {product.rating.count.toFixed(1)} - {product.rating.reviews}{" "}
                        avaliações
                    </span>
                </div>
            </div>
        </div>
    );
}
