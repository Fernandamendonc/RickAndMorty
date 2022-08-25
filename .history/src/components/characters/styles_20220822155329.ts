import styled from "styled-components";

export const Container = styled.div`
  .charactersImg{
    border-radius: 2rem 0rem 0rem 1rem;
  }

  .cards{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .card{
    display: flex;

    padding: 1rem 3rem;

    h1{
      color: #9FC131;
    }
  }
  
  .card-body{
    background-color: #424642;
    
    border-radius: 1rem;
    border-radius: 0rem 1rem 1rem 0rem;
    
    padding: 1rem;
    
    width: 100%;
  }

  .spaceImg{
    height: 1900px;
  }

  .buttonpages{
    display: flex;
    justify-content: spa;
    align-items: center;

    .previouspage{

    }
  }
`