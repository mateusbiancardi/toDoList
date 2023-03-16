import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    text: `'Inter', sans-serif`,
    input: `'Inter', sans-serif`,
    button: `'Inter', sans-serif`
  },
  initialColorMode: 'dark',
  useSystemColorMode: false
})

export default theme