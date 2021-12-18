import Router from 'next/router';
import React, { useState } from 'react'
import { Header } from '../../components/Header';
import { useAuth } from '../../contexts/auth'
import styles from './Login.module.scss'

export default function Login(){
    const {signIn} = useAuth();

    const [name, setName] = useState('')
    const [senha, setSenha] = useState('')
    
    async function handleSubmit() {
        signIn(name, senha)
        Router.push('/')
    }
    return (
        <>
            <Header />
            <div className={styles.loginContainer}>
                <form onSubmit={(e)=>e.preventDefault()}>
                    <div className={styles.inputContainer}>
                        <label>Nome</label>
                        <input type='text' value={name} placeholder='Digite o nome...' onChange={(e)=>setName(e.target.value)} />
                    </div>
                    <div className={styles.inputContainer}>
                        <label htmlFor="">Senha</label>
                        <input type='password' value={senha} placeholder='Digite a senha...' onChange={(e)=>setSenha(e.target.value)} />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={handleSubmit}>Enviar</button>
                        <button onClick={()=>{Router.push('/')}}>Voltar</button>
                    </div>

                </form>
            </div>
        </>
    )
}