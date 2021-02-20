import { Component, ComponentType } from 'react'
import { connect } from 'react-redux'
import { Redirect, Route, withRouter, Switch, RouteComponentProps } from 'react-router-dom'
import { compose } from 'redux'

import { Navbar, LoadingView, HeaderContainer } from './components'
import DialogsContainer from './modules/Dialogs/DialogsContainer'
import LoginContainer from './modules/Login/LoginContainer'
import News from './modules/News/News'
import { SnackbarError } from './modules/Profile/Information/InformationForm/InformationFormItems/SnackbarError'
import ProfileProvider from './modules/Profile/ProfileContainer'
import Settings from './modules/Settings/Settings'
import UsersContainer from './modules/Users/UsersContainer'
import { actions, thunkInitializing } from './redux/app-reducer'
import { AppStateType } from './redux/redux-store'

import './App.css'

interface AppPropsType {
  showingError: (showError: boolean) => void
  thunkInitializing: () => void
  showError: boolean
  initialized: boolean
}

class App extends Component<AppPropsType & RouteComponentProps> {
  catchAllUnhandledErrors = () => {
    this.props.showingError(true)
    setTimeout(() => {
      this.props.showingError(false)
    }, 3000)
  }

  componentDidMount() {
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    this.props.thunkInitializing()
  }

  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    const { showingError, showError, initialized } = this.props

    if (!initialized) return <LoadingView />

    return (
      <div className="app-wrapper container">
        <HeaderContainer />
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/profile/:userId?" render={() => <ProfileProvider />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" render={() => <LoginContainer />} />
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
          <SnackbarError error="Something went wrong" open={showError} setOpen={showingError} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  showError: state.app.showError,
})

export default compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, {
    thunkInitializing,
    showingError: actions.showingError,
  }),
)(App)
