import React, { PureComponent } from 'react'

 class PureCompo extends PureComponent {
  render() {
    console.log("pure component")
    return (
      <div>
          pure component {this.props.name}
      </div>
    )
  }
}
export default PureCompo