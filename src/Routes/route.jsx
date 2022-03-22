import { useContext } from 'react'
import { AuthContext } from '../Providers/auth'
import { Route as RouteDOM } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

const Route = ({
  isPrivate = false,
  isPublic = false,
  component: Component,
  ...rest
}) => {
  const { authenticated } = useContext(AuthContext)
  return (
    <RouteDOM
      {...rest}
      render={() => {
        return isPrivate === authenticated ? (
          <Component />
        ) : isPublic === true ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? '/login' : '/'} />
        )
      }}
    />
  )
}

export default Route
