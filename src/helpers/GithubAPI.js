const apiFetchGet = async (endpoint, body = {}) => {
  const res = await fetch('https://api.github.com/users/christopherldo/repos?per_page=100');
  return await res.json();
};

export const getMostRatedRepos = async () => {
  const repos = await apiFetchGet();
  repos.sort((a, b) => b.stargazers_count - a.stargazers_count);

  const eightFirst = [];

  for(let i = 0; i < 8; i++){
    eightFirst.push(repos[i]);
  };

  return eightFirst;
};