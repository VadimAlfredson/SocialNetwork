import {createTheme} from "@mui/material";

export const theme = createTheme({
palette: {
    primary: {main: '#101010'},
    secondary: {main: '#58585b'},
    success: {main: '#327d9b'},
    error: {main: '#7d1919'},
    warning: {main: '#c89600'},
    info: {main: '#D0D3D4'},
    action: {
        disabled: '#58585b',
        disabledBackground: '#58585b'
    },
}
})