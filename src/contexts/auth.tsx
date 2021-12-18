import React, {createContext ,useContext, useEffect, useState} from 'react'
import {api} from '../services/api'

type UserProp= {
    id: string
    data: {
        name: string
        senha: string
    }
}

type AuthProps = {
    user: UserProp
    signIn: (name: string, senha: string) => void
}

export const AuthContext = createContext({} as any)

export function AuthProvider({children}: any){
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])

    useEffect(()=>{
        async function loadStoragedData(){
            const storagedUser = await localStorage.getItem('user');

            if (storagedUser){
                setUser(JSON.parse(storagedUser));
            }
        }

        loadStoragedData();
    },[]);

    async function getUsuarios(){
        try{
            const {data} = await api.get('/users');
            setUsers(data)
        } catch (e) {
            console.log(e)
        }
    }

    async function signIn(nameProp: string, senhaProp: string){
        getUsuarios();
        try {
            const userEncounter = users.find(user => user?.data.name === nameProp && user?.data.senha === senhaProp);
            
            const {data} = await api.get(`/users/${userEncounter?.id}`);
            
            setUser(data);
            
            await localStorage.setItem('user', JSON.stringify(data));

        } catch (e){
            console.log(e)
        }
    }

    function signOut(){
        localStorage.clear()
        setUser(null)
    }
    return (
        <AuthContext.Provider value={{user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>

    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    return context;
}