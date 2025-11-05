import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";

async function getPostBySlug(slug) {
    const url = `http://localhost:3042/posts?slug=${slug}`;
  const response = await fetch(url);

  if (!response.ok) {
    logger.error(`Falha ao buscar posts: ${response.status} ${response.statusText}`);
    return {}; // Retorna um objeto vazio em caso de erro para nao quebrar a aplicaçao
  }
  logger.info('Posts carregados com sucesso');
  const data = await response.json();
  if(data.length == 0){
    return{};
  }
  const post = data[0];

  const proceesedContent = await remark()
    .use(html)
    .process(post.markdown);
    const contentHtml = proceesedContent.toString();
    post.markdown = contentHtml
  return post;      
 
}

const PagePost = async ({params}) => {
   
    const post =  await getPostBySlug(params.slug); 
    if (!post) {
        return <h1>Post não encontrado</h1>;
    }
    return (<>
    <h1 style={{color: "white"}}>{post.title}</h1>
    <div style={{color: 'white'}} dangerouslySetInnerHTML={{__html: post.markdown}} />
    </>);
};
export default PagePost; 