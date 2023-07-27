import styled from "styled-components";

export const AreaButton = styled.a`
    width: 100%;
    max-width: 20rem;
    height: 3.125rem;
    border-radius: 1rem;    
    background: #0b78a0;
    cursor: pointer;
    transition: all .3s  ease-in-out;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: center;
    &&:hover{
        background: #096688;
    }

    p{
        font-size:1.3rem;
        color: #fff;
    }
`;