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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  span{
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0.5rem;
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
  @media screen and (min-width: 1073px) {
    .cards{
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media screen and (min-width: 1300px) {
    .cards{
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`