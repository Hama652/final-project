import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  //load saved login so it stays after refresh
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('playverse_user')
    return saved ? JSON.parse(saved) : null
  })

  function login(data) {
    setUser(data)
    localStorage.setItem('playverse_user', JSON.stringify(data))
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('playverse_user')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}
