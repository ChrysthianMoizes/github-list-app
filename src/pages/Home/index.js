import React, { useState } from 'react';
import moment from 'moment';
import logo from '../../assets/logo.png';
import api from '../../services/api';
import { Container, Form } from './styles';

import List from '../../components/List';

export default function Home() {
  const [repositories, setRepositories] = useState([]);
  const [repo, setRepo] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: repository } = await api.get(`/repos/${repo}`);

      repository.last_commit = moment(repository.pushed_at).fromNow();

      setRepositories([...repositories, repository]);
      setRepo('');
      setError(false);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container>
      <img src={logo} alt="Github Compare" />

      <Form onSubmit={handleSubmit} error={error}>
        <input
          type="text"
          placeholder="usuário/repositório"
          value={repo}
          onChange={(e) => setRepo(e.target.value)}
        />
        <button type="submit">
          {loading ? <i className="fa fa-spinner fa-pulse" /> : 'BUSCAR'}
        </button>
      </Form>

      <List repositories={repositories} />
    </Container>
  );
}
