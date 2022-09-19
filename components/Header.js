import React from 'react'
import headerStyles from '../styles/Header.module.css'

function Header() {

  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>
                IgnoreThis
            </span>
                Repo
            </h1>
        <p className={headerStyles.description}>
            Don&apos;t waste your time looking through this repository
        </p>
    </div>
  )
}

export default Header

// function Header() {
//     const x =2
//   return (
//     <div>
//         <h1 className='title'><span>WebDev</span>News</h1>
//         <style jsx>
//             {`.title{color:${x>3?'red':'blue'};}}`}
//         </style>
//     </div>
//   )
// }

// export default Header