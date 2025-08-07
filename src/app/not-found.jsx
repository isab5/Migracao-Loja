import Link from "next/link";
import Button from "../components/Button/Button";
import styles from "./notFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Não foi possível encontrar essa página!</h1>
            <p className={styles.description}>A página que você procura não existe ou está temporariamente indisponível.</p>

            <div className={styles.links}>
                <Button>
                    <Link href="/">🏠 Voltar para Home</Link>
                </Button>
            </div>
        </div>
    )
}