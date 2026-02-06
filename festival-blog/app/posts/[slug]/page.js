import { getAllPosts, getPostBySlug } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './post.module.css'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function Post({ params }) {
  const post = getPostBySlug(params.slug)

  return (
    <>
      <Header />
      
      <article className={styles.article}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h1>{post.title}</h1>
            <p className={styles.date}>{post.date}</p>
            {post.author && <p className={styles.author}>By {post.author}</p>}
          </div>

          {post.coverImage && (
            <div className={styles.coverImage}>
              <img src={post.coverImage} alt={post.title} />
            </div>
          )}

          <div 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </article>

      <Footer />
    </>
  )
}
