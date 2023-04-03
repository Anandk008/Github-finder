import axios from 'axios'
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

const github = axios.create({
    baseURL: GITHUB_URL
})

// Search Users
export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  const responce = await github.get(`/search/users${params}`)
  return responce.data.items
};

// User Page Loading
export const getUserRepo = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`)
  ])
  return { user: user.data, repos: repos.data}
};
