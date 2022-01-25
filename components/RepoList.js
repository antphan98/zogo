import { useState, useEffect } from 'react';

export default function RepoList(props) {
  
    const [repoList, setRepoList] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch(`https://api.github.com/users/${props.username}/repos`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setRepoList(data)
            setLoading(false)

          })

    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!repoList) return <p>No repo data</p>
  
    console.log(repoList);

  return (
    <div>
      <div className="header">
    {repoList.map((repo) => (
        <div className="repo" key={repo.id}>{repo.name}</div>
    ))}
      </div>
    </div>
  )
}
