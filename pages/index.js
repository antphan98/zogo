import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'

const WORDPRESS_API_GITHUB_USER_URL = "https://zogo-7a8a1d.ingress-erytho.easywp.com/wp-json/wp/v2/pages/2";

export default function Home() {
  
    const [githubUser, setGithubUser] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch(WORDPRESS_API_GITHUB_USER_URL)
        .then((res) => res.json())
        .then((wpData) => {
 
          fetch(`https://api.github.com/users/${wpData.acf.user}`)
          .then((res) => res.json())
          .then((ghData) => {
            setGithubUser(ghData)
            setLoading(false)
          })

        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!githubUser) return <p>No User data</p>
  
  console.log(githubUser);
  return (
    <div className={styles.container}>
      <h1>{githubUser.login}</h1>
      <p>{githubUser.location}</p>
    </div>
  )
}
