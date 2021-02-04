/*
Call a JSON Placeholder api, get 10 users.
Implement a function getUsers() that returns only names and emails 
of the users whose names contain the letter k.
*/

const getUsers = async () => {
  const api = "https://jsonplaceholder.typicode.com/users";

  const response = await fetch(api);
  const data = await response.json();

  const usersWithK = data.filter((user) =>
    user.name.toLowerCase().includes("k")
  );

  return usersWithK.map(({ name, email }) => ({ name, email }));
};

getUsers();
