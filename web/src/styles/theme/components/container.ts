import { ComponentStyleConfig, defineStyle } from '@chakra-ui/react'

// define styles for custom variant
const mainVariant = defineStyle(() => {
  return {
    maxW: {
      base: '100%',
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
    },
  }
})

const container: ComponentStyleConfig = {
  variants: {
    main: mainVariant,
  },
}

export { container }
