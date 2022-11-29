import { createGlobalStyle } from 'styled-components'
import InstagramSansBoldEot from '../../public/assets/fonts/InstagramSans-Bold.eot'
import InstagramSansBoldWoff2 from '../../public/assets/fonts/InstagramSans-Bold.woff2'
import InstagramSansBoldWoff from '../../public/assets/fonts/InstagramSans-Bold.woff'
import InstagramSansBoldTtf from '../../public/assets/fonts/InstagramSans-Bold.ttf'
import InstagramSansRegularEot from '../../public/assets/fonts/InstagramSans-Regular.eot'
import InstagramSansRegularWoff2 from '../../public/assets/fonts/InstagramSans-Regular.woff2'
import InstagramSansRegularWoff from '../../public/assets/fonts/InstagramSans-Regular.woff'
import InstagramSansRegularTtf from '../../public/assets/fonts/InstagramSans-Regular.ttf'

export const FontStyles = createGlobalStyle`
@font-face {
    font-family: 'Instagram Sans';
    src: url('${InstagramSansBoldEot}');
    src: local('/assets/fonts/Instagram Sans Bold'), local('InstagramSans-Bold'),
        url('${InstagramSansBoldEot}?#iefix') format('embedded-opentype'),
        url('${InstagramSansBoldWoff2}') format('woff2'),
        url('${InstagramSansBoldWoff}') format('woff'),
        url('${InstagramSansBoldTtf}') format('truetype');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Instagram Sans';
    src: url('${InstagramSansRegularEot}');
    src: local('/assets/fonts/Instagram Sans Regular'), local('/public/assets/fonts/InstagramSans-Regular'),
        url('${InstagramSansRegularEot}?#iefix') format('embedded-opentype'),
        url('${InstagramSansRegularWoff2}') format('woff2'),
        url('${InstagramSansRegularWoff}') format('woff'),
        url('${InstagramSansRegularTtf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

`
