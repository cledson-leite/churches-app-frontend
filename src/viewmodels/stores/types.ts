export type User = {
  name: string,
  position: string,
  avatar: string
}

export type UserStore = {
  user: User,
  setUser: (user: User) => void
}

export type ColapseStore = {
  isCollapsed: boolean,
  setIsCollapsed: (isCollapsed: boolean) => void
}