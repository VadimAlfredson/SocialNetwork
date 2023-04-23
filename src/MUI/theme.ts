import {createTheme} from "@mui/material";

export const theme = createTheme({
palette: {
    primary: {main: 'rgba(0,0,0,0)'},
    secondary: {main: '#58585b'},
    success: {main: '#1F618D'},
    error: {main: '#922B21'},
    warning: {main: '#c9a300'},
    info: {main: '#D0D3D4'},
    action: {
        disabled: '#58585b',
        disabledBackground: '#58585b'
    },
}
})