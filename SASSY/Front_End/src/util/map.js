import { usermap } from "../constants"

const getUserTypeInt = (userType) => {
  return usermap[userType]
}

const getUserTypeStr = (userTypeInt) => {
  return Object.keys(usermap).find((key) => usermap[key] === userTypeInt)
}

export { getUserTypeInt, getUserTypeStr }
