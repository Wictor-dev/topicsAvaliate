import React, {useState} from 'react'
import { Button } from '../Button'
import styles from './Topic.module.scss'


type TopicProps = {
    title: string
}

export function Topic({title}: TopicProps) {
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    function handleLike() {
        setLike(like+1)
    }
    function handleDislike() {
        setDislike(dislike+1)
    }
    return (
        <div className={styles.topicContainer}>
            <p className={styles.title}>{title}</p>
            <p className={styles.like}>Likes: {like} </p>
            <p className={styles.like}>Dislikes: {dislike} </p>
            <Button like onClick={handleLike} />
            <Button dislike onClick={handleDislike}/>
        </div>
    )
}