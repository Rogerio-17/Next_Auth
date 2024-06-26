"use client";

import { useEffect, useState } from "react";
import { User } from "@prisma/client";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      });
  });

  return (
    <ul>
      {users.map((user: User) => (
        <li key={user.id}>
          {user.name} / {user.email}
        </li>
      ))}
    </ul>
  );
}
