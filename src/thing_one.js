import React from 'react'
import styled from 'styled-components'


const StyledThingOne = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  position: relative;
  top: 20%;
  left: 20%;
  border: solid 1px black;
  margin: 20px;
`

const ThingOne = React.forwardRef((props, ref) => (
      <StyledThingOne ref={ref}></StyledThingOne>
));


export default ThingOne