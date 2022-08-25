import styled from "styled-components";

export const Container = styled.div`
  .card{
    display: flex;
    flex-direction: column;
  }

  .imageCharacter{
    width: 200px;
  }

  .charactersImg{
    border-radius: 20rem;

    
  }

  .cards{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
    
    padding: 1rem;
    
    width: 100%;
  }

  .spaceImg{
    height: 1900px;
  }

  .buttonpages{
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 3rem;
    padding-right: 3rem;
    
    margin-bottom: 2rem;

    .previouspage{
      padding: 1rem;
    }

    .nextpage{
      padding: 1rem;
    }
  }
`