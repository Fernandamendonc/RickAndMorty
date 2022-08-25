import { useEffect, useState } from 'react'

import axios from 'axios'

import Image from 'next/image'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Container } from './styles'

interface Character{
  id: number
  name: string
  image: string
  status: string
  species: string
  location: {
    name: string
  }
  origin: {
    name: string
  }
}

export function Characters(){
  const [characters, setCharacters] = useState<Character[]>([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then((response) => {
      setCharacters(response.data.results)
    }).catch(() => {
      console.error('ERRO')
    })
  },[page])


  return (
    <Container>
      <Header />    

      <div className="cards">
        {
          characters.map((character) => (
            <div className="card" key={character.id}>

              <div className="namecharacters">
                <span className='name'>{character.name}</span>
              </div>

              <div className="card-body">

                <div className="imagecharacter">
                  <Image 
                    src={character.image} 
                    alt={`Imagem do ${character.name}`}
                    className="charactersImg"
                    width="150px"
                    height="150px"
                  />
                </div>

                <div className="backgroundbody">
                  <div className="header-title">
                    <div className="status">
                      <span>{character.status} - </span>
                      <span>{character.species}</span>
                    </div>
                  </div>

                  <span className='title'>Last known location: </span>

                  <div className="local">
                    <a href="https://rickandmortyapi.com/api/location">
                      <span>
                        {character.location.name}
                      </span>
                    </a>
                  </div>

                  <span className='title '>First seen in: </span>         

                  <div className="origin">
                    <span>
                      {character.origin.name}
                    </span>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className='buttonpages'>
        <button 
            type='button'
            className='previouspage'
            disabled={page === 1}
            onClick={() => setPage(page-1)}
          >Previous page
        </button>
        <h1>Pages: {page}</h1>
        <button 
          type='button'
          className='nextpage'
          disabled={page === 42}
          onClick={() => setPage(page+1)}
          >Next page
        </button>
      </div>

      <Footer />
    </Container>
  )
}