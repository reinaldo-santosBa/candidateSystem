import { Link } from "react-router-dom";
import styled from "styled-components";
interface IAreaselected {
    image: string;
}
export const AreaSelected = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .candidate{
        display: flex;
        width: 60vw;
        height: 80vh;
        background-color: #121212;
        border-radius: 2rem;
    }
    @media (max-width: 800px) {
        .candidate{
            height: 80vh;
            width:  80vw;
            flex-direction: column;
        }
    }
`;

export const CandidateImage = styled.div<IAreaselected>`
    height: 100%;
    width: 50%;
    background-image: ${ props => props.image };
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    border-radius: 2rem 0 0 2rem ;
    @media (max-width: 800px) {
        width: 100%;
        border-radius: 2rem 2rem 0 0  ;
    }
`;

export const DataArea = styled.div`
    display: flex;
    flex-direction: column !important;
    flex:1;
    padding: 1rem;
    justify-content: space-around;
    gap: 1rem;
    div{
        display: flex;
        flex-direction: column !important;
        gap: 1rem;
        p{
            color: #FFF;
            font-size: 2rem;
            font-weight: 700;
        }
    }
    @media (max-width: 800px) {
        padding: 2rem;
    }
`;

interface IBtn {
    bg: string;
    bgHover: string;
}

export const Btn = styled(Link)<IBtn>`
    color: #FFF;
    text-transform: uppercase;
    padding: .5rem;
    text-decoration: none;
    text-align: center;
    outline: none;
    background: ${props => props.bg};
    border: none;
    transition: all .5 ease-in-out;
    font-size: 1.5rem;
    font-weight: 700;
    &&:hover {
        background: ${props => props.bgHover};
    }
`;

export const Mensagem = styled.p`
    font-size: 4rem;
    color: #c76868;
    text-transform: uppercase;
    font-weight: bold;
`;