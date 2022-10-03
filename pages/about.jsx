import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About(){
    return(
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, ea suscipit totam quam voluptatum eveniet tempora quas quisquam! Odit id cumque iure, in temporibus nemo pariatur sapiente blanditiis voluptates corrupti?</p>
            <Image src="/image/charizard.png" width="300" height="300" alt="charizard"/>
        </div>
    )
}