import styled from "styled-components";

interface ElementIconProps {
    rotate: string;
}
export const AreaSelect = styled.div`
    width: auto;
    height: auto;
    width: 20rem;
`;


export const Campo = styled.div <ElementIconProps>`
    background-color: #096688;
    color: #FFF;
    padding: 1rem;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    align-items: center;
    gap: .7rem;
    .icon{
        transform: ${props => props.rotate};
        transition: all .5s ease-in-out;
        font-size: 2rem;
    }
`;

export const AreaItems = styled.div`

    width: 100%;
    height: 0;
    transition: all .1s ease-in-out;
    display: inline-block;
    .item{
        background-color: #096688;
        color: #FFF;
        font-size: 1.2rem;
        padding: 1rem;
        transition: all .5s ease-in-out;
        
    }
    .item.active{
        visibility: visible;
        opacity: 1;
        cursor: pointer;
    }
    .item.disabled{
        visibility: hiden;
        opacity: 0;
        pointer-events: none;
    }
`;
