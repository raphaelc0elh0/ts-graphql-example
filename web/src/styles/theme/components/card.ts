import { ComponentStyleConfig } from '@chakra-ui/react'
import { cardAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  container: {
    bg: 'white',
  },
})

const card: ComponentStyleConfig = {
  baseStyle,
}

export { card }
