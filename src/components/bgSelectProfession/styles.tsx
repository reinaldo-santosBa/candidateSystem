import styled from "styled-components";
import bg from "../../assets/bgdesktop.jpg";

export const Image = styled.div`
    width: 100vw;
    height: 100vh;
    background: url(${bg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

export const BgOpacity = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
`;
