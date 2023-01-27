import styled from 'styled-components'
import CreateButton from "src/components/CreateButton/CreateButton";

export const Root = styled.div``

export const Create = styled(CreateButton)`
  position: fixed;
  right: ${({ theme }) => theme.baseStyles.paddings.gutterMobile};
  bottom: 100px;
`
