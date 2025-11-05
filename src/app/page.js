import Image from "next/image";
import styles from "./page.module.css";
import { CardPost } from "@/components/CardPost";
import logger from "@/logger";

async function getAllPosts() {
 const response = await fetch('http://localhost:3042/posts');
 if (!response.ok) {
    logger.error(`Falha ao buscar posts: ${response.status} ${response.statusText}`);
   return []; // Retorna um array vazio em caso de erro para nao quebrar a aplicaçao
 }
 logger.info('Posts carregados com sucesso');
 return response.json();
}
export default async function Home() {
  const posts = await getAllPosts()
  return (
    <main >
      {posts.map(post => <CardPost post={post} key={post.id} />)}
      
    </main>
  );
}
