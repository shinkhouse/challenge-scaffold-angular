import { Users } from "../models/user";

export const users: Users = [
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      password: "password123",
      roles: [
        { role_id: "1", role_name: "Admin" },
        { role_id: "2", role_name: "Editor" }
      ]
    },
    {
      name: "Bob Smith",
      email: "bob.smith@example.com",
      password: "securePass456",
      roles: [
        { role_id: "2", role_name: "Editor" },
        { role_id: "3", role_name: "Viewer" }
      ],
      chorus_ownership: ['a7e5f710-b22a-4c89-8f3d-3c2d9e41d515']
    },
    {
      name: "Carol White",
      email: "carol.white@example.com",
      password: "mySecret789",
      roles: [
        { role_id: "3", role_name: "Viewer" }
      ]
    },
    {
      name: "David Lee",
      email: "david.lee@example.com",
      password: "passWord1234",
      roles: [
        { role_id: "1", role_name: "Admin" }
      ]
    },
    {
      name: "Emma Brown",
      email: "emma.brown@example.com",
      password: "brownie321",
      roles: [
        { role_id: "4", role_name: "Contributor" },
        { role_id: "3", role_name: "Viewer" }
      ]
    }
  ];
  