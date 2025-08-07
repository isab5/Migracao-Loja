import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
    const displayedTitle = product.title ? product.title : "Título não informado";
    const displayedDescription = product.description ? product.description : "Descrição não informada";
    const displayedPrice = product.price ? `R$ ${product.price}` : "Preço não informado";
    const displayedRating = product.rating ? product.rating : "Sem avaliações";
    const displayedStars = product.stars ? product.stars : 0;

    return (
        <div className={styles.card}>
            <div className={styles.imageCard}>
                {product.image ? (
                    <Image
                        src={product.image}
                        alt={displayedTitle}
                        width={180}
                        height={140}
                        loading="lazy"  
                        className={styles.image}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span>{displayedTitle.split(" ")[0]}</span>
                    </div>
                )}
            </div>
            <div className={styles.info}>
                <h2 className={styles.title}>{displayedTitle}</h2>
                <p className={styles.price}>{displayedPrice}</p>
                <p className={styles.description}>{displayedDescription}</p>
                <div className={styles.rating}>
                    <span className={styles.stars}>
                        {Array.from({ length: Math.floor(displayedRating) }).map(
                            (_, i) => (
                                <span key={i}>★</span>
                            )
                        )}
                        {displayedRating.count % 1 >= 0.5 && <span>½</span>}
                    </span>
                    <span className={styles.ratingValue}>
                        {displayedRating.count} - {displayedRating.reviews}{" "}
                        avaliações
                    </span>
                </div>
            </div>
        </div>
    );
}
