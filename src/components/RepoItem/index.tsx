import React from 'react';
import githubIcon from '../../assets/github-2.svg';

import {RepoItemDiv} from './style';

interface RepoItemProps {
    html_url: string;
    name: string;
    clone_url: string;
    owner?: {

    }
}

const RepoItem:React.FC<RepoItemProps> = ({ clone_url, html_url, name, owner, children }) => {
    return (
        <RepoItemDiv href={html_url}>

            <strong>{name}</strong>
            <div>
            <a defaultValue={clone_url}>
                <img src={githubIcon} alt="GitHub"/>
                
            </a>
                
            </div>
            

        </RepoItemDiv>
    )
}

export default RepoItem;