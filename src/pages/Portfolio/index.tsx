import React, { useEffect, useState } from 'react';

import {PortfolioDiv} from './style';

import Header from '../../components/Header';
import RepoItem from '../../components/RepoItem';

import api from '../../services/githubApi/index';

function Portfolio() {

    const [repos, setRepos] = useState<any[]>([]);

    useEffect(() => {
        api.get('').then(response => {
            console.log(response.data);
            setRepos(response.data)
        });
    
    }, [])


    return (
            <>
            <Header/>
            <PortfolioDiv>
            {repos.map(repo => {
                return(


                    <RepoItem 
                    clone_url={repo.clone_url} 
                    html_url={repo.html_url}
                    name={repo.name}
                    key={repo.name}
                    
                    />
                )

                
            })}
            </PortfolioDiv>
            </>
        
    )
}

export default Portfolio;