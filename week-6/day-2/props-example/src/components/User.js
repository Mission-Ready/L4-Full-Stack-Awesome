function User() {
  const users = [
    { id: 1, name: 'Sebin Benjamin' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jane Doe' },
    { id: 4, name: 'George' },
  ];

  return (
    <div>
      {users.map((user) => (
        <div> My name is {user.name} </div>
      ))}
    </div>
  );
}

export default User;
