import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p><strong>Common Grounds Community Festival at the Lookout</strong></p>
      <p>A free community event for the Wollongong region</p>
      <p className={styles.acknowledgment}>
        We acknowledge the Dharawal people as the Traditional Custodians of the land on which this festival takes place. We pay our respects to Elders past, present and emerging, and extend that respect to all Aboriginal and Torres Strait Islander peoples.
      </p>
    </footer>
  )
}
