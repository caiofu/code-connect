import Image from "next/image";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";

async function getAllPosts(page) {
  const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
  if (!response.ok) {
    logger.error(`Falha ao buscar posts: ${response.status} ${response.statusText}`);
    return []; // Retorna um array vazio em caso de erro para nao quebrar a aplicaçao
  }
  logger.info('Posts carregados com sucesso');
  return response.json();
}
export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;// Pega a página atual dos parâmetros de busca, padrão é 1
  const { data: posts, prev, next } = await getAllPosts(currentPage)

  return (
    <main  >
      <div className={styles.grid}>
        {posts.map(post => <CardPost post={post} key={post.id} />)}
      </div>
      <div className={styles.linkPagination}>
        {prev && <Link href={`/?page=${prev}`}> Página Anterior</Link>}
        {next && <Link href={`/?page=${next}`}> Próxima Página</Link>}
      </div>
    </main>
  );
}
