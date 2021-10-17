import React from 'react'

import styled from 'styled-components'
import PortfolioDetail from '../components/PortfolioDetail'
import { useLocation } from 'react-router-dom'

import Card from '../components/Card'
import { useApi } from '../hooks/useApi'

const Portfolio = () => {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const { data } = useApi('/portfolio')
    return (
        <PortfolioList>
            {slug && <PortfolioDetail slug={slug} />}
            <Hide>
                <CardList>
                    {data?.data?.map(project => {
                        return (<Card key={project.slug} project={project} />)
                    })}
                </CardList>
            </Hide>
        </PortfolioList>
    )
}

const PortfolioList = styled.div`
     min-height: 100vh;
     overflow: hidden;
     padding: 5rem 10rem;
`;

const Hide = styled.div`
    overflow: hidden;
`;


const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;


`;


export default Portfolio