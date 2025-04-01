const API_URL = 'http://localhost:3001/usuarios';

export const getUsers = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createUser = async (user) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  });
  return response.json();
};
