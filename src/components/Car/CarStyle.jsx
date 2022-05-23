import styled from 'styled-components';

export const ContainerCenter = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ContainerCard = styled.div`
    background-color: white;
    width: 30%;
    border-radius: 10px;
    padding: 20px;
    margin: 20px auto;

    
    img { 
        width:80%
    }
    h3{
        color: #0693e3;
        font-size: 1.5rem;
    }
    p {
        font-weight: 600;
        font-size: 1.1rem
    }
    a {
        width: 100%;
        text-decoration: none;
    }
    a:visited, a:link{
        text-decoration: none;
    }
    @keyframes animationButton{
        from{background-color: #0693e3; color: #fff}
        to{background-color: #fff; color: #0693e3; border: 1px solid #0693e3}
    }
    button{
        width:100%;
        height:40px;
        color: #fff;
        font-size:0.8em;
        background-color:#0693e3;
        border: none;
        border-radius: 5px;
        
    }
    button:hover{
        cursor: pointer;
        animation-name: animationButton;
        animation-duration: 2s;
        animation-fill-mode: forwards
    }
    @media(max-width: 480px) {
            width: 65% ;
    }
`