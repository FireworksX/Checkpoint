import {
  FC,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  RefObject,
  TextareaHTMLAttributes,
  useMemo
} from 'react'
import * as Styled from './styles'

export type InputProps = {
  status?: 'success' | 'error'
  statusText?: ReactNode
  className?: string
  label?: string
  inputClassName?: string
  postfix?: string
  icon?: SvgNames
  isSlimArea?: boolean
} & (
  | ({ textarea?: false } & InputHTMLAttributes<HTMLInputElement>)
  | ({ textarea: true } & TextareaHTMLAttributes<HTMLTextAreaElement>)
)

const Input: FC<InputProps> = forwardRef<HTMLInputElement | HTMLTextAreaElement, PropsWithChildren<InputProps>>(
  ({ isSlimArea, label, status, statusText, className, inputClassName, postfix, icon, ...inputProps }, ref) => {

    const StatusCheck = useMemo(() => {
      if (status) {
        return status === 'success' ? <Styled.IconCheck /> : <Styled.IconExclamation />
      }
    }, [status])

    return (
      <Styled.Root className={className}>
        {label && <Styled.Label>{label}</Styled.Label>}
        <Styled.Wrapper>
          {icon && <Styled.IconLeft name={icon} />}
          {inputProps.textarea ? (
            <Styled.TextArea
              {...inputProps}
              hasIcon={!!icon}
              className={inputClassName}
              ref={ref as RefObject<HTMLTextAreaElement>}
              isSlimArea={isSlimArea}
              status={status}
            />
          ) : (
            <Styled.Input
              className={inputClassName}
              hasIcon={!!icon}
              type='text'
              status={status}
              {...inputProps}
              ref={ref as RefObject<HTMLInputElement>}
            />
          )}
          {postfix && <Styled.Postfix>{postfix}</Styled.Postfix>}
          <div>{StatusCheck}</div>
          <div>{statusText && <Styled.Message status={status}>{statusText}</Styled.Message>}</div>
        </Styled.Wrapper>
      </Styled.Root>
    )
  }
)

export default Input
