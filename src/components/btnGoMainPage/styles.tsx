import styled from "styled-components";

export const AreaBtnGoHome = styled.div`
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
    margin-bottom: 3.125rem;
    &&:hover{
        background: #096688;
    }
    .textBtn{
        font-size:1.3rem;
        color: #FFF;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .textBtn:hover{
        color: #e1e1e1;
    }
`;