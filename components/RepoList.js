import { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import star from "../images/star.png";
const _ = require("lodash");

const override = css`
position: absolute;
top: 50%;
left: 50%;
border-color: pink;
`;


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

    if (isLoading) return <ClipLoader className="loader" css={override} loading={isLoading} size={150} />
    if (!repoList) return <p>No repo data found.</p>

    console.log(repoList);
    const orderedList = _.orderBy(repoList, ['stargazers_count'], ['desc']);

    return (
        <div>
            <div className="repolist">
                {orderedList.map((repo) => (
                    <a href={repo.html_url}>
                    <div className="repo" key={repo.id}>
                        <h2>{repo.name}</h2>
                        <p>{repo.description}</p>
                        <p><img className="star" src={star.src} width="20"/> {repo.stargazers_count}</p>

                    </div>
                    </a>

                ))}
            </div>
        </div>
    )
}
