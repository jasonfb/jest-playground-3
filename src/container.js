import React from 'react'
import styled from 'styled-components'

import ThingOne from "./thing_one";
const StyledContainer = styled.div`
  display: block;
`

class Container extends React.Component {
  constructor(props) {
    super(props)
    this.thing_one_ref = React.createRef()
    this.state = {
      message: ""
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({message: "A test of refs"})

      // here's the console.log
      console.log(this.thing_one_ref.current.getBoundingClientRect())
    }, 1000)
  }

  render() {
    const {message} = this.state
    return (
      <StyledContainer>
        {message}
        <ThingOne ref={this.thing_one_ref}/>
      </StyledContainer>
    )
  }
}

export default Container