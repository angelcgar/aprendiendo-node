interface User {
  id: number;
  name: string;
}

const users: User[] = [
  {
    id: 1,
    name: "Juan Hernandez",
  },
  {
    id: 2,
    name: "John Doe",
  },
];

export function getUserById(
  id: number,
  callback: (err?: string, user?: User) => void
) {
  const user = users.find(function (user) {
    return user.id === id;
  });

  if (!user) {
    return callback(`user not found with id: ${id}`);
  }

  return callback(undefined, user);
}
