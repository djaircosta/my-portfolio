import React from 'react'
import moment from 'moment'

import { Link } from 'react-router-dom'

import styled from 'styled-components'


const Card = ({ project }) => {

    return (
        <StyledCard>
            <Link to={`/portfolio/${project.slug}`}>
                <Content>
                    <Image src={project.image} />
                    <Info>
                        <h3>{project.title}</h3>
                        <h4>{moment(project.createdAt).format('MMM YYYY')}</h4>
                        <p>{project.description}</p>
                    </Info>
                </Content>
            </Link>
        </StyledCard>

    )

}

const StyledCard = styled.div`
    background-color: green;
    min-height: 30vh;
    border-color: #416CD5;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    a{
      text-decoration: none;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 70%;

`;

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
    flex-direction: column;
    justify-content: space-between;
    h3{
        padding-top: 2rem;

    }

`;

export default Card