import { css } from 'styled-components'

const typography = {
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
  text_32_38: {
    fontSize: '32px',
    lineHeight: '38px'
  },
  text_26_30: {
    fontSize: '26px',
    lineHeight: '30px'
  },
  text_20_24: {
    fontSize: '20px',
    lineHeight: '24px'
  },
  text_18_22: {
    fontSize: '18px',
    lineHeight: '22px'
  },
  text_16_20: {
    fontSize: '16px',
    lineHeight: '20px'
  },
  text_14_24: {
    fontSize: '14px',
    lineHeight: '24px'
  },
  text_14_20: {
    fontSize: '14px',
    lineHeight: '20px'
  },
  text_12_16: {
    fontSize: '12px',
    lineHeight: '16px'
  },
  text_11_16: {
    fontSize: '11px',
    lineHeight: '16px'
  },
  text_11_12: {
    fontSize: '11px',
    lineHeight: '12px'
  },
  text_10_12: {
    fontSize: '10px',
    lineHeight: '12px'
  },
  text_9_9: {
    fontSize: '9px',
    lineHeight: '9px'
  },
  textEllipsis: css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `
}

export default typography
