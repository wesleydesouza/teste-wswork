import styled from 'styled-components';

export const HeaderContainer = styled.header`


    
    width: 100%;
    height: 80px;
    background-color: #ccc;
    display: flex;
    justify-content: space-around;

    figure{
        width: 90px;
    }
    img{
        width: 100%
    }
    
    ul{
        width: 200px;
        height: 100%;
        margin: 0px;
        display:flex;
        justify-content: space-around;
        align-items: center;
    }
    a{      
        width:100%;  
        height: 100%;
        text-decoration: none;
        display: flex;
        color: #fff;
        font-size:1.2em;
        
    }
    a:hover{
        cursor: pointer;
        color:#0693e3;
    }
    li{
        margin: auto;
        list-style-type: none;
    }
    h1{
        font-family: "Redressed", cursive;
        
    }
    span{
        color:#0693e3
    }
    @media(max-width: 480px) {
        height: 40px;
        a{
            font-size:0.8em;
        }
        h1,span{
            font-size:1em;
        }
    }
`