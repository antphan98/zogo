import { useState, useEffect } from 'react';
import RepoList from '../components/RepoList';
import styles from '../styles/Home.module.css';
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
position: absolute;
top: 50%;
left: 50%;
border-color: pink;
`;


const WORDPRESS_API_GITHUB_USER_URL = "https://zogo-7a8a1d.ingress-erytho.easywp.com/wp-json/wp/v2/pages/2";

export default function Home() {

  const [githubUser, setGithubUser] = useState(null)
  const [isLoading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

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

  if (isLoading) return <ClipLoader css={override} loading={isLoading} size={150} />

  if (!githubUser) return <p>No User data</p>

  console.log(githubUser);
  return (
    <div className={styles.container}>
      <div className="header">
      <h1>Hi! I'm {githubUser.name}</h1>

      <img className="userimg" src={githubUser.avatar_url} />
      <button onClick={() => setActiveTab('overview')}>Overview</button>
      <button onClick={() => setActiveTab('repolist')}>Repos</button>
        {activeTab === 'overview' &&
          <>
            <h4>{githubUser.login}</h4>
            <p>{githubUser.location}</p>
            <p>{githubUser.bio}</p>

          </>}
        {activeTab === 'repolist' &&
          <RepoList username={githubUser.login} />
        }

    

      </div>
    </div>
  )
}
