import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface IModal {
    opacity: number;
    display: string;
    zIndex: number;
}

export const ContainerModal = styled.div<IModal>`
    width: 100vw;
    height: 100vh;
    background-color: #00000099;
    position: absolute;
    display: ${props => props.display} !important;
    align-items: center;
    justify-content: center;
    z-index: ${props => props.zIndex};
    opacity: ${props => props.opacity};
    transition: .5s all ease-in-out;
`;

export const AreaModal = styled.div`
    width: 50vw;
    height: auto;
    padding: 2.3rem 0;
    background-color: #121212;
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconClose = styled(AiOutlineClose)`
    position:   absolute;
    color: #e1e1e1;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    font-size: 2rem;
`;

export const Input = styled.input`
    width: 80%;
    background-color: #333;
    color: #e1e1e1;
    height: 3.75rem;
    outline: none;
    border: none;
    margin-top: 2rem;
    border-radius:2rem;
    padding: 2rem;
`;

export const ItemList = styled.p`
    cursor: pointer;
    color: #e1e1e1;
    font-size: 1.5rem;
    margin-top: 2rem;
    &&:hover {
        color: #d1d1d1;
        font-size: 1.6rem;
    }
`;