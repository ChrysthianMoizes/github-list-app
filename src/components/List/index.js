import React from 'react';

import {
  Container,
  Repository,
  Header,
  Logo,
  Name,
  Company,
  ListItem,
  Item,
  Description,
  ButtonContainer,
  Update,
  Delete,
} from './styles';

export default function List({ repositories, handleUpdate, handleDelete }) {
  return (
    <Container>
      {repositories.map((repository) => (
        <Repository key={repository.id}>
          <Header>
            <Logo
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <Name>{repository.name}</Name>
            <Company>{repository.owner.login}</Company>
          </Header>

          <ListItem>
            <Item>
              {repository.stargazers_count} <Description>stars</Description>
            </Item>
            <Item>
              {repository.forks_count} <Description>forks</Description>
            </Item>
            <Item>
              {repository.open_issues_count} <Description>issues</Description>
            </Item>
            <Item>
              {repository.last_commit} <Description>last commit</Description>
            </Item>
          </ListItem>
          <ButtonContainer>
            <Update onClick={() => handleUpdate(repository)}>
              <i className="fa fa-retweet" />
            </Update>
            <Delete onClick={() => handleDelete(repository)}>
              <i className="fa fa-trash" />
            </Delete>
          </ButtonContainer>
        </Repository>
      ))}
    </Container>
  );
}
