import { ComponentStyleConfig } from '@chakra-ui/react'
import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system'

const { definePartsStyle } = createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: '3xl',
    pb: '1rem',
    mx: '0.5rem',
  },
})

const modal: ComponentStyleConfig = {
  baseStyle,
}

export { modal }
