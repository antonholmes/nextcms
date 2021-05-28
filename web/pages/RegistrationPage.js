import PropTypes from 'prop-types'
import React from 'react'
import Layout from '../components/Layout'

class RegistrationPage extends React.Component {
  render () {
    const {config} = this.props
    return (
      <Layout config={config}>
        <h1>A custom page</h1>
        <Input
          name='username'
          mb={3}
        />
        <Input
          type='password'
          name='password'
          mb={3}
        />
      </Layout>
    )
  }
}

RegistrationPage.propTypes = {
  config: PropTypes.object
}

export default RegistrationPage
