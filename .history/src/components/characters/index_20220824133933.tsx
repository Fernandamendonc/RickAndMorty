import { useEffect, useState } from 'react'

import axios from 'axios'

import Image from 'next/image'

import { Container } from './styles'
import { Header } from '../Header'

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
      <div style={{ backgroundImage: `url(${background})` }}>
    </div>
        {
          characters.map((character) => (
            <div className="card" key={character.id}>
              <div className="backgroungimgcharacter">
                <div className="imagecharacter">
                  <Image 
                    src={character.image} 
                    alt={`Imagem do ${character.name}`}
                    className="charactersImg"
                    width="300px"
                    height="300px"
                  />
                </div>
              </div>
              <div className="card-body">
                <h1>{character.name}</h1>
                <div className="status">
                  <span>{character.status} - </span>
                  <span>{character.species}</span>
                </div>
                <div className="local">
                  <h2>Last known location:</h2>
                  <span>{character.location.name}</span>
                </div>
                <div className="origin">
                  <h2>First seen in:</h2>
                  <span>{character.origin.name}</span>
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
          <span>Página: {page}</span>
          <button 
            type='button'
            className='nextpage'
            disabled={page === 42}
            onClick={() => setPage(page+1)}
          >Next page
        </button>
      </div>
    </Container>
  )
}