import { createGlobalStyle } from 'styled-components'


export const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Instagram Sans';
    src: url('/public/assets/fonts/InstagramSans-Bold.eot');
    src: local('/public/assets/fonts/Instagram Sans Bold'), local('InstagramSans-Bold'),
        url('/public/assets/fonts/InstagramSans-Bold.eot?#iefix') format('embedded-opentype'),
        url('/public/assets/fonts/InstagramSans-Bold.woff2') format('woff2'),
        url('/public/assets/fonts/InstagramSans-Bold.woff') format('woff'),
        url(/public/assets/fonts/'InstagramSans-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Instagram Sans';
    src: url('/public/assets/fonts/InstagramSans-Regular.eot');
    src: local('/public/assets/fonts/Instagram Sans Regular'), local('/public/assets/fonts/InstagramSans-Regular'),
        url('/public/assets/fonts/InstagramSans-Regular.eot?#iefix') format('embedded-opentype'),
        url('/public/assets/fonts/InstagramSans-Regular.woff2') format('woff2'),
        url('/public/assets/fonts/InstagramSans-Regular.woff') format('woff'),
        url('/public/assets/fonts/InstagramSans-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`
