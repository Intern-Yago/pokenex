import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

export default function Navbar(){
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}> 
                <Image src="/image/pokeball.png" width="30" height="30" alt="pokénex"/>
                <h1>Pokénex</h1>
            </div>
            <ul className={styles.link_itens}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}