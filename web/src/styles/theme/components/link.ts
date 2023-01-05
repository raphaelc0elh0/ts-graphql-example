import { ComponentStyleConfig } from '@chakra-ui/react'

const link: ComponentStyleConfig = {
  variants: {
    default: ({ colorScheme = 'hostel-pink' }) => ({
      color: `${colorScheme}.500`,
      _hover: {
        color: `${colorScheme}.700`,
        textDecoration: 'none',
      },
    }),
  },
  defaultProps: {
    variant: 'default',
  },
}

export { link }
