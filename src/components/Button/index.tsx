import React from 'react'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
type ButtonProps = {
    title?: string
    like?: boolean
    dislike?: boolean
    onClick?: () => void
    color: string
}

export function Button({title, like, dislike, onClick, color}: ButtonProps){
    return (
        <button onClick={onClick} style={{background: '#999999'}}>
            {like && (
                <AiFillLike 
                    size={25}     
                    color={color}               
                />
            )}
            {dislike && (
                <AiFillDislike
                    size={25}
                    color={color}
                />
            )}
            {!like && !dislike && (
                <p>{title}</p>
            )}
        </button>
    )
}