import styled from "styled-components";

export const AuxAlign = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AreaButton = styled.div`
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