import logoImg from '../../assets/Logo.png'
import Image from 'next/image'
import { Container } from './styles'

export function Header(){
  return(
    <Container>
      <Image
        src={logoImg}
        alt="Logo Rick and Morty"
        width="200px"
        height="150px"
      />
      
    </Container>
  )
}