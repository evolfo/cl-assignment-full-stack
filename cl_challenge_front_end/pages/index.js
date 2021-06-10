import styles from '../styles/Home.module.css'
import Footer from './components/footer'
import Header from './components/header'
import 'semantic-ui-css/semantic.min.css'
import HomePage from './components/homepage'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}
