import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import '@fontsource/bungee-shade';
import '@fontsource/michroma';
import '@fontsource/balsamiq-sans';
import '@fontsource/raleway';
import '@fontsource/archivo';


const menloFont = defineStyle({
    fontFamily : `'Menlo', monospace`,
});

const bungeeFont = defineStyle({
    fontFamily : `'Bungee Shade', sans-serif`,
});

const michromaFont = defineStyle({
    fontFamily : `'Michroma', sans-serif`,
});

const balsamiqFont = defineStyle({
    fontFamily : `'Balsamiq Sans', sans-serif`,
});
const archivoFont = defineStyle({
    fontFamily : `'Archivo', sans-serif`,
});



export const headerTheme = defineStyleConfig({
    variants: {
        "Menlo": menloFont,
        "Michroma": michromaFont,
        "Bungee": bungeeFont,
        "Balsamiq": balsamiqFont,
        "Archivo": archivoFont
    },
})
