import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    text: `'Inter', sans-serif`,
    input: `'Inter', sans-serif`,
    button: `'Inter', sans-serif`
  },
  color: {
    light_blue: '#6093e6',
    light_grey: '#272e3b',
  }
})

export default theme