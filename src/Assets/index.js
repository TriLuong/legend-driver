const images = {
  icon: require('./images/icon.png'),
  splash: require('./images/splash.png'),
  loadLeftIcon: require('./images/loadLeftIcon.png'),
  logoutIcon: require('./images/logoutIcon.png')
}

const fontMap = {
  'SFProText-Bold': require('./fonts/SFProText-Bold.otf'),
  'SFProText-Heavy': require('./fonts/SFProText-Heavy.otf'),
  'SFProText-Light': require('./fonts/SFProText-Light.otf'),
  'SFProText-Medium': require('./fonts/SFProText-Medium.otf'),
  'SFProText-Regular': require('./fonts/SFProText-Regular.otf'),
  'SFProText-SemiBold': require('./fonts/SFProText-SemiBold.otf'),
  'SFProDisplay-Bold': require('./fonts/SFProDisplay-Bold.otf'),
  'SFProDisplay-Heavy': require('./fonts/SFProDisplay-Heavy.otf'),
  'SFProDisplay-Light': require('./fonts/SFProDisplay-Light.otf'),
  'SFProDisplay-Medium': require('./fonts/SFProDisplay-Medium.otf'),
  'SFProDisplay-Regular': require('./fonts/SFProDisplay-Regular.otf'),
  'SFProDisplay-SemiBold': require('./fonts/SFProDisplay-SemiBold.otf')
}
const fonts = {
  text: {
    regular: 'SFProText-Regular',
    medium: 'SFProText-Medium',
    semibold: 'SFProText-SemiBold',
    bold: 'SFProText-Bold',
    light: 'SFProText-Light',
    heavy: 'SFProText-Heavy'
  },
  display: {
    regular: 'SFProDisplay-Regular',
    medium: 'SFProDisplay-Medium',
    semibold: 'SFProDisplay-SemiBold',
    bold: 'SFProDisplay-Bold',
    light: 'SFProDisplay-Light',
    heavy: 'SFProDisplay-Heavy'
  }
}

const colors = {
  purpleBlue: '#6922e5',
  white: '#f2f2f2',
  darkIndigo: '#060d2a',
  slateGrey12: 'rgba(103, 106, 116, 0.12)',
  paleGrey: '#f5f7fb',
  navy: '#001d21',
  charcoalGrey: '#323643',
  electricPurple: '#b533ff',
  coolGrey: '#91969b',
  gunmetal12: 'rgba(74, 95, 94, 0.12)',
  darkBlueGrey: '#0d1726',
  blackTwo: '#060606'
}

export default {
  images,
  colors,
  fonts,
  fontMap
}
