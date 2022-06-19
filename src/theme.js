import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ 
    config, 
    colors: {
      indigo: "#221254",
      yellowNeon: "#fff200",
      naturalYellow: "#e3c30e",
      darkWhite: "#f2f2f2",
      lightIndigo: "#3e248c",
      lightYellow: "#f7ee48",
      black: "#11092a",
      kaca: "RGBA(0, 0, 0, 0.5)",
    },
    styles: {
      global: (props) => ({
        body: {
          bg: mode("darkWhite", "indigo")(props),
        },
      }),
    },
})

export default theme;