import Image from 'next/image'
import logoImg from '../../assets/Logo.png'
import logoGithub from '../../assets/logogithub.svg'


import { Container } from './styles'

export function Header(){
  return(
    <Container>
      <Image
        src={logoImg}
        alt="Logo Rick and Morty"
        width="500px"
        height="250px"
      />
      <a href="https://github.com/Fernandamendonc">
        <div className="logogithub">
          <Image 
            src={logoGithub}
            alt="Logo GitHub"
            className='logogthb'
          />
          @Fernandamendonc
        </div>
        </a>
    </Container>
  )
}