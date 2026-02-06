import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      
      <div className={styles.divider}></div>

      <main className="container">
        <section className={styles.intro}>
          <h2>Welcome to the Festival</h2>
          <p className={styles.introText}>
            The Common Grounds Community Festival at the Lookout is a free, inclusive community event designed to bring people together through shared learning, creativity, environmental stewardship and local culture.
          </p>
        </section>

        <section className={styles.blogSection}>
          <h2>Festival Updates & Stories</h2>
          <div className={styles.postsGrid}>
            {posts.map((post) => (
              <article key={post.slug} className={styles.postCard}>
                <Link href={`/posts/${post.slug}`}>
                  <div className={styles.postImage}>
                    <img src={post.coverImage} alt={post.title} />
                  </div>
                  <div className={styles.postContent}>
                    <h3>{post.title}</h3>
                    <p className={styles.date}>{post.date}</p>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <span className={styles.readMore}>Read more →</span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
