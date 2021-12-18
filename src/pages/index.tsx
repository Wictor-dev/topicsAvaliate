import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Topic } from '../components/Topic'
import styles from '../styles/Home.module.scss'
import { api } from '../services/api'
import { useEffect, useState } from 'react'

type TopicProp = {
  id?: string
  data: {
    title?: string
    likes?: number
  }
}
type TopicsProps = {
  data: TopicProp[]
}

const Home = ({data}: TopicsProps) => {
  const [arrTopics, setArrTopics] = useState<any>();

  useEffect(()=>{
    setArrTopics(data)
    console.log(arrTopics)
  },[data, arrTopics])

  const topicsRender = arrTopics!==undefined ?  arrTopics.map((topic: TopicProp) => {
    return(
      <Topic key={topic?.id} id={topic?.id}  />
    )
  }) : ''

  return (
    <>
      <Header />
      <div className={styles.topicsContainer}>
        <h1>Topicos</h1>
        <div className={styles.topics}>
          {topicsRender}
        </div>
      </div>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const {data} = await api.get('topics')

  return {
    props: {
      data
    },
    revalidate: 20
  }
}