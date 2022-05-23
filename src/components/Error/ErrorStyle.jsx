import styled from 'styled-components';

export const Container = styled.main` 
    display:flex;
    justify-content: center;
    width:100%;
    h1{
        font-size: 8rem;
        margin-bottom: -10px;
    }
    span{
        color: #0693e3;
    }
    p{
        text-align: center;
    }
    a {
        text-decoration: none;
    }
    a:visited, a:link{
        text-decoration: none;
    }

    @media(max-width: 480px) {
           h1{
               font-size: 4rem;
           }
           p, a{
               font-size: 0.6rem;
           }
    }
` 