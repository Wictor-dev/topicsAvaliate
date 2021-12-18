import React, { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Topic } from '../../components/Topic'
import { api } from '../../services/api'
import styles from './Negative.module.scss'
type TopicProp = {
    id: string
    data : {
        title: string
        likes: number
        dislikes: number
    }
}
export default function PositiveTopics(){
    const [topics, setTopics] = useState<TopicProp[]>([])
    useEffect(()=>{
        async function getTopics(){
            const {data} = await api.get('topics')
            const dataFiltered = data.filter((topic : TopicProp) => topic.data.dislikes > topic.data.likes)
            setTopics(dataFiltered)
        }
        
        getTopics()
    },[])
    
    const topicsRender = topics?.map(topic => (
        <Topic id={topic?.id} key={topic?.id} />
    ))
    return (
        <>
        <Header />
        <div className={styles.topicsContainer}>
            <h1>Topics Positivos</h1>
            <div className={styles.topics}>
                {topicsRender}

            </div>
        </div>
        </>
    )
}