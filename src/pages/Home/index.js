import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    async function loadRepositories() {
      const reposLocal = await localStorage.getItem('github@repositories');
      if (reposLocal) {
        setRepositories(JSON.parse(reposLocal));
      }
    }

    loadRepositories();
  }, []);

  async function saveRepositories(repos) {
    await localStorage.setItem('github@repositories', JSON.stringify(repos));
  }

  async function handleUpdate(repository) {
    const { data } = await api.get(`/repos/${repository.fullName}`);

    setRepositories(
      repositories.map((repos) => (repos.id === data.id ? data : repos)),
    );
  }

  async function handleDelete(repository) {
    const newRepos = repositories.filter((repos) => repos.id !== repository.id);

    setRepositories(newRepos);
    saveRepositories(newRepos);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: repository } = await api.get(`/repos/${repo}`);

      repository.last_commit = moment(repository.pushed_at).fromNow();

      setRepositories([...repositories, repository]);
      setRepo('');
      setError(false);
      saveRepositories([...repositories, repository]);
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

      <List
        repositories={repositories}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </Container>
  );
}
