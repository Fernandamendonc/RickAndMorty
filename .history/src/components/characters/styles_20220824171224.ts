import styled from "styled-components";

export const Container = styled.div`
  .cards{
    display: grid;
    grid-template-columns: 1fr 1fr;

    position: relative;
    padding-right: 8rem;
    padding-left: 8rem;

    min-width: 600px;
  }

  .charactersImg{
    border-radius: 20rem;
  }

  .card{
    display: flex;
    flex-direction: column;

    padding: 1rem 3rem;

    h1{
      color: #9FC131;
    }
  }
  
  .card-body{
    border-radius: 1rem;
    
    padding: 2rem;

    background-color: #424642;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    min-height: 300px;
  }

  .title{
    font-size: 20px;
    font-weight: bold;
  }

  .buttonpages{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 11rem;
    padding-left: 11rem;
    
    margin-bottom: 2rem;
    margin-top: 2rem;

    .previouspage{
      padding: 1rem;
    }

    .nextpage{
      padding: 1rem;
    }

    button{
      border-radius: 0.5rem;
      border: none;

      cursor: pointer;

      transition: 1s;

      background: rgba( 255, 255, 255, 0.35 );
      box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
      backdrop-filter: blur( 11px );
      -webkit-backdrop-filter: blur( 11px );
      border-radius: 10px;
      border: 1px solid rgba( 255, 255, 255, 0.18 );
    }

    button:hover{
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 1400px) {
    .cards{
      display: grid;
      grid-template-columns: 1fr;
    }

    .card-body{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (max-width: 1400px) {
    .card-body{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`