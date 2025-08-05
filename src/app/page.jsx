import Image from "next/image";
import styles from "./page.module.css";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header title="Loja de Eletrônicos" subtitle="Os melhores produtos com os melhores preços!" totalProducts={10} />
      <h1>Bem-vindo à nossa loja!</h1>
    </div>
  );
}
