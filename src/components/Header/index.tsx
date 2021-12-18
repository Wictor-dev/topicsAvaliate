import Link from 'next/link'
import React from 'react'
import { useAuth } from '../../contexts/auth'
import styles from './Header.module.scss'
export function Header(){
    const {user, signOut} = useAuth()
    return (
        <div className={styles.headerContainer}>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>

            </div>
            <nav>
                <Link href='/PositiveTopics'>
                    <a>Topicos Positivos</a>
                </Link>
                <Link href='/NegativeTopics'>
                    <a>Topicos Negativos</a>
                </Link>
                {user ? (
                    <>
                        <Link href='/CreateTopic'>
                            <a>Criar Topico</a>
                        </Link>
                        <button onClick={signOut}>
                            <a>Sair</a>
                        </button>
                    </>
                ): (
                    <Link href='/login'>
                        <a>Fazer Login</a>
                    </Link>
                )}
                
            </nav>
        </div>
    )
}