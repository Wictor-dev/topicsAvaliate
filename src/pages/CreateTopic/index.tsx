import Router from 'next/router'
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { useAuth } from '../../contexts/auth'
import { api } from '../../services/api'
import styles from './CreateTopic.module.scss'
export default function CreateTopic() {
    const [title, setTitle] = useState('')
    const {user} = useAuth();

    async function handleSubmit() {
        await api.post('topics', {title: title, userId: user.id})
        Router.push('/')
    }

    return (
        <>
            <Header />
            <div className={styles.topicContainer}>
                <form onClick={(e)=>e.preventDefault()}>
                    <div className={styles.inputContainer}>
                        <label>Titulo</label>
                        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} required />
                        <button onClick={handleSubmit} disabled={title === ''}>Criar</button>
                    </div>

                </form>
            </div>
        </>
    )
}
