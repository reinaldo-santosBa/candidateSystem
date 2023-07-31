import styled from "styled-components";

interface IMenuStyles {
    positionLeftMenu: string;
}

interface IbtnStyle {
    positionLeftBtn: string;

}

export const AreaMenu = styled.nav<IMenuStyles>`
    min-height: 100vh;
    max-height: 100vh;
    overflow-y: auto;
    
    overflow-x: hidden;
    width: 18.75rem;
    background-color: #0A0A0A;
    box-shadow: 1px 1px 1px #000;
    position: absolute;
    top: 0;
    z-index: 100;
    left: ${props => props.positionLeftMenu ? props.positionLeftMenu : 0 };
    transition: all 0.5s ease-in-out;
    &&::-webkit-scrollbar {
        background-color: #222;
    }
    &&::-webkit-scrollbar-thumb {
        background: #333;
    }
    @media (max-width: 800px) {
        position: fixed;
    }
`;

export const BtnOpenClose = styled.div <IbtnStyle>`
    color: #096688;
    font-size: 3rem;
    position: absolute;
    top: 1.5rem;
    left: ${props => props.positionLeftBtn};
    z-index: 1000;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    @media (max-width: 800px) {
        position: fixed;
    }
`;


export const AreaItem = styled.ul`
    width: 100%;
    height: auto;
    list-style: none;
    padding: 0;
    .linkClass{
        text-decoration: none !important;
    }
`;


export const AreaItems = styled.li`
    margin: .8rem 0;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    &&:hover{ 
        a{
            color: #096688;
        }
        div{
            background-color: #096688;
            width: 1rem;
            position: absolute;
            border-radius: 0% .5rem .5rem 0;  
            height: 2rem;
            left: 0;
        }
    }

`;

export const  AreaItemBtn = styled.li`
    margin: 1.5rem 0;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    
    &&:hover{ 
        a{
            color: #096688;
        }
        div{
            background-color: #096688;  
        }
    }
    .decorationSelected {
        background-color: #096688;
    }
    div{ 
        transition: all 0.5s ease-in-out;
        background-color: none;
        width: 1rem;
        position: absolute;
        border-radius: 0% .5rem .5rem 0;  
        height: 110%;
        left: 0;
        transition: all 0.5s ease-in-out;
    }
    a{
            transition: all 0.5s ease-in-out;

        color: #FFF;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: .4rem;
        text-align: center;
        text-decoration: none;
    }


    .activeBtn{
        color: #096688;
    }
    
`;

export const AreaItemSubBtn = styled.li`
    margin: .5rem 0;
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    &&:hover{ 
        a{
            color: #096688;
            font-size: 1.5rem;

        }
    }
    color: #FFF;
    .activeBtn{
        color: #096688;
        font-size: 1.5rem;
    }
`;