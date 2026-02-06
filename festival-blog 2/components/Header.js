import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.heroContent}>
        <h1>Common Grounds Community Festival</h1>
        <p className={styles.subtitle}>at the Lookout</p>
        <div className={styles.eventDetails}>
          <p><strong>A celebration of community, sustainability & connection</strong></p>
          <p>📍 40 Lady Wakehurst Drive, Otford</p>
          <p>🌱 Dharawal Country, adjacent to Royal National Park</p>
        </div>
      </div>
    </header>
  )
}
