import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import '@fontsource/bungee-shade';

const menloFont = defineStyle({
    fontFamily : `'Menlo', monospace`,
});

const bungeeFont = defineStyle({
    fontFamily : `'Bungee Shade', sans-serif`,
});

export const headerTheme = defineStyleConfig({
    variants: {
        "Menlo": menloFont,
        "Bungee": bungeeFont
    },
})
