// localstorage.ts

export type User = {
  name: string
  userId: string
  email: string
  isLogged: boolean
  isSubscribed: boolean
  customerId?: string | null
  sessionStripeId?: string | null
}

const FAKE_USER: User = {
  name: 'Dan Chanivet',
  userId: '64fcb8e5a2c5d3b7f3e7a9c1',
  email: 'chanivetdan1988@hotmail.com',
  isLogged: true,
  isSubscribed: false,
  customerId: null,
  sessionStripeId: null,
}

// Create and save in localStorage
export const createFakeUser = () => {
  localStorage.setItem('user', JSON.stringify(FAKE_USER))
}

// Retrieve user from localStorage
export const getUser = (): User | null => {
  const userStr = localStorage.getItem('user')
  return userStr ? JSON.parse(userStr) : null
}

// Update isSubscribed property
export const setUserSubscribed = () => {
  const user = getUser()
  if (user) {
    user.isSubscribed = true
    localStorage.setItem('user', JSON.stringify(user))
  }
}

export const removeUser = () => {
  localStorage.removeItem('user')
  return null
}

export const removeSubscription = (): User | null => {
  const user = getUser()
  if (user) {
    const updatedUser = {
      ...user,
      isSubscribed: false,
      customerId: '',
      sessionStripeId: null
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    return updatedUser
  }
  return null
}

export const logout = (): User | null => {
  const user = getUser()
  if (user) {
    const updatedUser = {
      ...user,
      isLogged: false,
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    return updatedUser
  }
  return null
}


export const login = (): User | null => {
  const user = getUser()
  if (user) {
    const updatedUser = {
      ...user,
      isLogged: true,
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    return updatedUser
  }
  return null
}

export const endMembership = () => {
  const user = getUser()
  if (user) {
    const updatedUser = {
      ...user,
      isSubscribed: false
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    return updatedUser
  }
  return null
}

export const reactivateMembership = () => {
  const user = getUser()
  if (user) {
    const updatedUser = {
      ...user,
      isSubscribed: true
    }
    localStorage.setItem('user', JSON.stringify(updatedUser))
    return updatedUser
  }
  return null
}