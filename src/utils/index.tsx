import { IUser } from "react-app-env"

export function getInitialValues(user: IUser | null): any | undefined {
  if (!user) return undefined
  return {
    login: user.name,
    email: user.email,
  }
}
