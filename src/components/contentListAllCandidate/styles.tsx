import styled from "styled-components";

export const  ContentArea = styled.div`
    min-height: 100vh;
    min-width: 100vw;
    max-height: 100vh !important;
    max-width: 100vw !important;
    overflow-x: hidden;
    height: 100%;
    background-color: none; 
    padding: 2rem;
    display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    .card{
        text-decoration: none;
        width: auto;
        height: 22rem;
        padding: 2rem;
        background-color: #121212; 
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        cursor: pointer;
        border-radius: 1rem;   
        margin-bottom: 2rem;
        transition: all 1s ease-in-out;
        p{
            font-size: 1.5rem;
            margin-top: 1rem;
            color: #FFF;
            text-align: center;
            vertical-align: center;
            flex: 1;
        }
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr
    }
`;

interface IProprsImgwrapper {
    image: string;
}

export const ImgWrapper = styled.div<IProprsImgwrapper>`
    width: 100%;
    height: 20rem;
    border-radius: 1rem;   
    background-image: ${props => props.image};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;
