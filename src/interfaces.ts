export interface Todo {
  id: number,
  userId: number,
  name: string,
  description: string,
  createdAt: string,
  updatedAt: string
}

export interface UserPayload {
  discordId: string,
  email: string
}

export interface UserProfile {
  username: string,
  id: number
}

export interface Token {
  token: string
}
