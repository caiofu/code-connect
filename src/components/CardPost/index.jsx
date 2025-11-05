import { Avatar } from "../Avatar";
import styles from './cardPost.module.css';
import Image from 'next/image';
export const CardPost = ({post}) => {
    return (
        <article className={styles.cardPost}>
            <header >
                <figure>
                    <Image src={post.cover} width={438} height={133} alt={`Capa do post de titulo: ${post.title}`}/>
                </figure>
            </header>
            <section className={styles.text}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <button>Leia mais</button>
                <Avatar name={post.author.name} imageSrc={post.author.avatar} />
            </footer>
        </article>
    )
};