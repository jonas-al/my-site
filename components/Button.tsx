import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

interface Props {
    link: string
    text: string
    icon: string | null
}

const StyledButton = styled.a`
    padding: 2px;
    border-radius: .3em;
    border: double 0px transparent;
    background-image: linear-gradient(black, black),
    linear-gradient(to left, #FF00E5, #4200FF);
    background-origin: border-box;
    background-clip: content-box, border-box;

    &:hover{
        background-image: linear-gradient(#1A1919, #1A1919),
        linear-gradient(to left, #4200FF, #FF00E5);
    }
`

const Button = ( { link, text, icon }:Props ) => {
    if(icon){
        return (
            <StyledButton 
                href={link}
                target={'_blank'}
                className='w-32 h-11 flex justify-center gap-x-3 items-center bg-black hover:bg-medium-black'
            >
                <Image src={icon} alt='Icon' />
                <p className='text-lg text-white font-body font-bold'>{text}</p>
            </StyledButton>
        )
    }
    
    return (
        <StyledButton
            href="/curriculo-jonas.pdf"
            target={'_blank'}
            className='w-32 h-11 flex justify-center gap-x-3 items-center bg-black hover:bg-medium-black'
        >
            <p className='text-lg text-white font-body font-bold'>{text}</p>
        </StyledButton>
    )
}

export default Button