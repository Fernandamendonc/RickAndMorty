import styled from "styled-components";

export const Container = styled.div`
  .cards {
    display: grid;
    grid-template-columns: 1fr 1fr;

    position: relative;
    padding-right: 8rem;
    padding-left: 8rem;

    min-width: 600px;

    span {
      font-size: 20px;
    }
  }

  .card {
    display: flex;
    flex-direction: column;

    padding: 1rem 3rem;

    position: relative;
  }

  .name {
    top: 15px;
    left: 50px;
    position: absolute;

    color: #191A19;
    background: #9FC131;

    padding: 10px;

    font-size: 1rem;
    font-weight: 700;

    border-radius: 1rem 0rem 0rem 0rem;
  }

  .charactersImg {
    border-radius: 40rem;
  }
  
  .card-body {
    border-radius: 1rem;
    
    padding: 2rem;

    background-color: #424642;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;

    min-height: 300px;

    border: 2px solid #9FC131;
  }


  .title {
    font-size: 1.2rem;
    font-weight: 400;

    color: #0F8C2F;
  }

  .buttonpages {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 11rem;
    padding-left: 11rem;
    
    margin-bottom: 2rem;
    margin-top: 2rem;

    .previouspage {
      padding: 1rem;
    }

    .nextpage {
      padding: 1rem;
    }

    h1 {
      color: #0F8C2F;
    }

    button {
      border-radius: 0.5rem;
      border: 1px solid #0F8C2F;

      cursor: pointer;

      transition: 1s;

      background: #424642;
    }

    button:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 1400px) {
    .cards {
      display: grid;
      grid-template-columns: 1fr;
    }

    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and ( max-width: 1400px ) {
    .card-body {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      height: 500px;
    }

    button {
      font-size: 0.8rem;
    }

    h1 {
      font-size: 1rem;
    }
  }
`