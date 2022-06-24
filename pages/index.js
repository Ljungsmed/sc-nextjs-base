import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation/navigation'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to SC NextJS base</title>
        <meta name="description" content="Add meta data here" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation>
        
      </Navigation>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to SC NextJS base
        </h1>        
      </main>

      <footer className={styles.footer}>        
          Standard NextJS App          
      </footer>
    </div>
  )
}
