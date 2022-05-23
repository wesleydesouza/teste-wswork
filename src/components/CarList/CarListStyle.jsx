import styled from 'styled-components';

//form

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 95%;
    padding: 25px;
    margin: auto;
    background-color:#f2f2f2;

    
    div{
        margin: auto;
        width: 50%;
        display: flex;
        flex-direction: column;
    }

    input, select{
        margin-bottom:15px;
        width: 100%;
        height: 25px;
        border-radius: 5px;
        border: 1px solid #ccc;
        color: #0d0d0d
    }
    button{
        width:100%;
        height:40px;
        color: #fff;
        font-size:1em;
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
    @media(max-width: 768px) {
        
        width:90%;
    }
    @media(max-width: 480px) {
        width:80%;
        div{
            width: 100% ;
        }
    }
`;


//section
export const ContainerCenter = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export const ContainerCard = styled.div`
    background-color: white;
    width: 31%;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;

    
    img { 
        width:80%
    }
    h3{
        color: #0693e3
    }
    p {
        font-weight: 600;
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
        font-size:1em;
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
