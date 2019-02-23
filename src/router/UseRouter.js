import { useContext } from 'react'
import { Route } from 'react-router-dom'

export default function useRouter() {
  return useContext(Route)
}
