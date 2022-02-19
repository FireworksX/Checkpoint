import {
  FC,
  forwardRef,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  RefObject,
  TextareaHTMLAttributes
} from 'react'
import * as Styled from './styles'

export type InputProps = {
  error?: ReactNode | true
  success?: ReactNode | true
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
  ({ isSlimArea, label, error, success, className, inputClassName, postfix, icon, ...inputProps }, ref) => {
    const status = success ? 'success' : error ? 'error' : undefined

    // if (inputProps?.textarea) {
    //   // @ts-ignore
    //   delete inputProps.textarea
    // }

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
          <div>{success ? <Styled.IconCheck /> : error ? <Styled.IconExclamation /> : null}</div>
          <div>
            {success && success !== true ? (
              <Styled.Message status='success'>{success}</Styled.Message>
            ) : error && error !== true ? (
              <Styled.Message status='error'>{error}</Styled.Message>
            ) : null}
          </div>
        </Styled.Wrapper>
      </Styled.Root>
    )
  }
)

export default Input
