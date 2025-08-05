import styles from './Header.module.css';
import Image from 'next/image';

export default function Header({ title, subtitle, totalProducts }) {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
            <Image src="/img/logo.png" alt="Logo" width={180} height={200} priority={true} />
            </div>
            <div className={styles.text}>
                <h1 className={styles.title}>{title}</h1>
                <p>{subtitle}</p>
                <p>📊Total de produtos: {totalProducts}</p>
            </div>
        </div>
    );
}