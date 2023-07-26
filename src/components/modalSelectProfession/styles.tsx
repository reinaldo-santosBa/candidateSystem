import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

interface IModal {
    opacity: number;
    zIndex: number;
}

export const ContainerModal = styled.div<IModal>`
    width: 100vw;
    height: 100vh;
    background-color: #00000099;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: ${props => props.zIndex};
    opacity: ${props => props.opacity};
    transition: .5s all ease-in-out;
`;

export const AreaModal = styled.div`
    width: 50vw;
    height: 70vh;
    background-color: #e1e1e1;
    border-radius: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IconClose = styled(AiOutlineClose)`
    position:   absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    font-size: 2rem;
`;

export const Input = styled.input`
    width: 80%;
    height: 3.75rem;
    outline: none;
    border: none;
    margin-top: 2rem;
    border-radius:2rem;
    padding: 2rem;
`;

export const ItemList = styled.p`
    cursor: pointer;
    font-size: 1.5rem;
    margin-top: 2rem;
`;