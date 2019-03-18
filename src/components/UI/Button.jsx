import * as React from 'react'

import styled, { css } from 'styled-components'

/* export interface ButtonProps {
  text: string;
  primary?: boolean;
} */

const Internal = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`

const Button = () => {
  return <Internal>Text</Internal>
}

/* const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>
} */

export { Button }
