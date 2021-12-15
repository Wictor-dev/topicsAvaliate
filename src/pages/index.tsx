import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Topic } from '../components/Topic'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className={styles.topicsContainer}>
        <h1>Topicos</h1>
        <Topic title="Homem aranha" />
        <Topic title="SuperMan" />
      </div>
    </>
  )
}

export default Home
