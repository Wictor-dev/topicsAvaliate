import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
type ButtonProps = {
    title?: string
    like?: boolean
    dislike?: boolean
    onClick?: () => void
}

export function Button({title, like, dislike, onClick}: ButtonProps){
    return (
        <button onClick={onClick}>
            {like && (
                <AiOutlineLike 
                    size={25}                    
                />
            )}
            {dislike && (
                <AiOutlineDislike
                    size={25}
                />
            )}
            {!like && !dislike && (
                <p>{title}</p>
            )}
        </button>
    )
}