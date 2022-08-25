import { useEffect, useState } from 'react'

import axios from 'axios'

import Image from 'next/image'
import pointImg from '../../assets/pointlocation.png'
import eyeImg from '../../assets/eye.png'

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
      
      <div className="cards">
        {
          characters.map((character) => (
            <div className="card" key={character.id}>
              <div className="card-body">
                <div className="imagecharacter">
                  <Image 
                    src={character.image} 
                    alt={`Imagem do ${character.name}`}
                    className="charactersImg"
                    width="200px"
                    height="200px"
                  />
                </div>
                <div className="backgroundbody">
                  <h1>{character.name}</h1>
                  <div className="status">
                    <span>{character.status} - </span>
                    <span>{character.species}</span>
                  </div>
                  <div className="local">
                    <span>
                      <Image
                        src={pointImg}
                        alt="location"
                      />
                      {character.location.name}
                    </span>
                  </div>
                  <div className="origin">
                    <span>                    
                      <Image
                        src={eyeImg}
                        alt="eye"
                      />
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
          <span>Página: {page}</span>
          <button 
            type='button'
            className='nextpage'
            disabled={page === 42}
            onClick={() => setPage(page+1)}
          >Next page
        </button>
      </div>
      <footer>
        <span>fernanda mendonça</span>
      </footer>
    </Container>
  )
}