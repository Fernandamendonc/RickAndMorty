import styled from "styled-components";

export const Container = styled.div`
  .cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    position: relative;
  }

  .card{
    display: flex;
    flex-direction: column;
  }

  .imagecharacter{
    background-color: #9FC131;

    border-radius: 1rem 1rem 0rem 0rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .charactersImg{
    border-radius: 20rem;


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

    border-radius: 0rem 0rem 1rem 1rem;
    
    padding: 1rem;
    
    width: 100%;
    height: 100%;
  }

  .buttonpages{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 3rem;
    padding-right: 3rem;
    
    margin-bottom: 2rem;
    margin-top: 2rem;

    .previouspage{
      padding: 1rem;
    }

    .nextpage{
      padding: 1rem;
    }
  }
`