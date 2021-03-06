import styled from 'styled-components'
import PageHeader from 'src/widgets/PageHeader/PageHeader'
import Container from '../../components/Container/Container'
import CompilationCell from '../../components/CompilationCell/CompilationCell'
import Button from '../../components/Button/Button'

export const Root = styled.div``

export const Header = styled(PageHeader)`
  margin-bottom: 30px;
`

export const Wrapper = styled(Container)`
  margin-bottom: 15px;
`

export const CategoryCard = styled(CompilationCell).attrs({ effect: 'none', afterClassName: 'after' })`
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  .after {
    margin-left: auto;
  }
`

export const CategoryControls = styled.div`
  display: flex;
  align-items: center;
`

export const ControlButton = styled(Button)`
  width: 30px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`
