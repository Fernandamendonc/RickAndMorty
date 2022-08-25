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
    border-radius: 1rem;

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #9FC131;
    padding: 2rem 0rem;
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
    border-radius: 1rem;
    
    padding: 1rem;
    
    width: 100%;
    height: 100%;

    background-color: #424642;
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

  @media screen and (max-width: 900px) {
    .cards{
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  @media screen and (min-width: 1300px) {
    .cards{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media screen and (min-width: 1283px) {
    .cards{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`