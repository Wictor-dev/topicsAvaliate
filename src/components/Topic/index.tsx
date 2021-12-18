import React, {useEffect, useState} from 'react'
import { Button } from '../Button'
import styles from './Topic.module.scss'
import { api } from '../../services/api'
type Props = {
    id: string
}

type TopicProp = {
    id: string
    data: {
        title: string
        likes: number
        dislikes: number
    }
}
export function Topic({id}: Props) {
    const [topics, setTopics] = useState<TopicProp>()
    const [like, setLike] = useState(false)
    const [dislike, setDislike] = useState(false)

    useEffect(()=>{
        async function getTopic() {
            const {data} = await api.get(`topics/${id}`)
            setTopics(data)
        }

        getTopic()
    },[like, dislike])

    async function handleLike() {
        setLike(!like)
        
        const newLike = topics?.data.likes || 0
        if(like) {
            const {data} = await api.get(`topics/${id}`)
            if (data.data.likes <= 1) {
                return;
            } else {
                await api.put(`topics/${id}`,{likes: newLike - 1})
            }
        } else {
            await api.put(`topics/${id}`,{likes: newLike + 1})
        }  
        
    }
    async function handleDislike() {
        setDislike(!dislike)
        const newDislike = topics?.data.dislikes || 0
        if(dislike) {
            await api.put(`topics/${id}`,{dislikes: newDislike - 1})
        } else {
            await api.put(`topics/${id}`,{dislikes: newDislike + 1})
        }
    }
    return (
        <div className={styles.topicContainer}>
            <p className={styles.title}>{topics?.data?.title}</p>
            <p className={styles.like}>Likes: {topics?.data?.likes} </p>
            <p className={styles.like}>Dislikes: {topics?.data?.dislikes} </p>
            <Button like onClick={handleLike} color={like ? 'var(--blue)' : 'var(--white)'} />
            <Button dislike onClick={handleDislike} color={dislike ? 'var(--blue)' : 'var(--white)'} />
        </div>
    )
}