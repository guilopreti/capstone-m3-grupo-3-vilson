import { Switch } from 'react-router-dom'
import Register from '../pages/Register/index'
import Login from '../pages/Login/index'
import ArticlePage from '../pages/ArticlePage'
import Home from '../pages/Home'
import User from '../pages/User'
import TermsArticlePage from '../pages/TermsArticlePage'
import CreatePost from '../pages/CreatePost'
import Aboutus from '../pages/Aboutus'
import Route from './route'
import RevisionPage from '../pages/RevisionPage'
import RevisionPostPage from '../pages/RevisionPostPage'

const Routes = () => {
  return (
    <Switch>
      <Route isPublic component={Home} exact path='/' />
      <Route isPublic component={Aboutus} path='/aboutus' />
      <Route component={Login} exact path='/login' />
      <Route component={Register} exact path='/register' />
      <Route component={ArticlePage} exact path='/post' />
      <Route component={RevisionPage} exact path='/revision' />
      <Route component={RevisionPostPage} exact path='/post-revision' />
      <Route isPrivate component={User} exact path='/user' />
      <Route isPrivate component={TermsArticlePage} exact path='/terms' />
      <Route isPrivate component={CreatePost} exact path='/create' />
    </Switch>
  )
}

export default Routes
