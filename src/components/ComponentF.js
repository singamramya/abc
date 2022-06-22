import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
          {
              username=>{return <div>Helo {username}</div>}
          }
      </UserConsumer>
    )
  }
}

export default ComponentF
