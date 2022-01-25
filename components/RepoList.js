import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
const _ = require("lodash");

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

    if (isLoading) return <ClipLoader loading={isLoading} size={150} />
    if (!repoList) return <p>No repo data</p>

    console.log(repoList);
    const orderedList = _.orderBy(repoList, ['stargazers_count'], ['desc']);

    return (
        <div>
            <div className="header">
                {orderedList.map((repo) => (
                    <div className="repo" key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p></p>
                        <p>{repo.stargazers_count}</p>



                    </div>

                ))}
            </div>
        </div>
    )
}
