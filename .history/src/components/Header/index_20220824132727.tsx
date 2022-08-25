import Image from 'next/image'
import logoImg from '../../assets/Logo.png'
import logoGithub from '../../assets/logogithub.svg'


import { Container } from './styles'

export function Header(){
  return(
    <Container>
      <a href="https://github.com/Fernandamendonc">
      <Image
        src={logoImg}
        alt="Logo Rick and Morty"
        width="200px"
        height="150px"
      />

      </a>
      <div className="logogithub">
        <Image 
          src={logoGithub}
          alt="Logo GitHub"
        />
        <a href="https://github.com/Fernandamendonc">@Fernandamendonc</a>
      </div>
    </Container>
  )
}