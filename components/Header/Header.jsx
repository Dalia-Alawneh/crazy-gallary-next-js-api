import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
const Header = () => {
    return (
        <>
          <div className={`text-white vh-100 d-flex justify-content-center align-items-center ${styles.header}`}>
            <h1>Crazy Album</h1>

           
        </div>
           
            <div>
            <Image src="/1.png" alt="" width={200} height={300}/>
            </div>
            <div>
            <Image src="/2.png" alt="" width={200} height={300}/>
            </div>
            <div>
            <Image src="/3.png" alt="" width={200} height={300}/>
            </div>
          
        </>
      
    )
}
export default Header
