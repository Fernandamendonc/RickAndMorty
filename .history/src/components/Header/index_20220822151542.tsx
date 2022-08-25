import logoImg from '../../assets/Logo.png'
import Image from 'next/image'
import { Container } from './styles'

export function Header(){
  return(
    <Container>
      <Image
        src={logoImg}
        alt="Logo Rick and Morty"
        width="150px"
        height="100px"
      />
      <ul>
        <li>Home</li>
        <li>GitHub</li>
      </ul>
    </Container>
  )
}