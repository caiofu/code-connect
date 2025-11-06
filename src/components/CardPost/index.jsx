import Link from "next/link";
import { Avatar } from "../Avatar";
import styles from './cardPost.module.css';
import Image from 'next/image';
export const CardPost = ({post, highlight}) => {
    return (
       <Link href={`/posts/${post.slug}`} className={styles.link}>
         <article className={styles.cardPost} style={{ width: highlight ? 993 : 486}}>
            <header >
                <figure style={{ height: highlight ? 300 : 133}}>
                    <Image src={post.cover} fill alt={`Capa do post de titulo: ${post.title}`}/>
                </figure>
            </header>
            <section className={styles.text}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <button>Leia mais</button>
                <Avatar name={post.author.username} imageSrc={post.author.avatar} />
            </footer>
        </article>
         </Link>
    )
};