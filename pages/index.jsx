import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'

export async function getStaticProps(){
  const maxPokemons = 150
  const api = 'https://pokeapi.co/api/v2/pokemon/'
  const response = await fetch(`${api}/?limit=${maxPokemons}`)

  const data = await response.json()
  //add id pokemons
  data.results.forEach((item,index)=>{
    item.id = index+1
  })
  return{
    props:{
      pokemons:data.results
    }
  }

}

export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poké<span>nex</span></h1>
        <Image src="/image/pokeball.png" width="50" height="50" alt="Pokénex"/>
      </div>
      <div className={styles.pokemons_container}>
        {pokemons.map((pokemon)=>(
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  )
}
