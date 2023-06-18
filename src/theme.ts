import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
	interface Palette {
		blue: Palette['primary'];
		lightBlue: Palette['primary'];
		lightYellow: Palette['primary'];
		white: Palette['primary'];
		black: Palette['primary'];
		darkGray: Palette['primary'];
		lightGray: Palette['primary'];
	}
	interface PaletteOptions {
		blue: PaletteOptions['primary'];
		lightBlue: PaletteOptions['primary'];
		lightYellow: PaletteOptions['primary'];
		white: PaletteOptions['primary'];
		black: PaletteOptions['primary'];
		darkGray: PaletteOptions['primary'];
		lightGray: PaletteOptions['primary'];
	}
}

declare module '@mui/material/IconButton' {
	interface IconButtonPropsColorOverrides {
		white: true;
	}
}

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 576,
			md: 768,
			lg: 1010,
			xl: 1350,
		},
	},
	palette: {
		primary: {
			main: '#00A6B8',
			light: '#C6E5E8',
		},
		secondary: {
			main: '#82C284',
		},
		error: {
			main: '#f44336',
		},
		warning: {
			main: '#ffa726',
		},
		info: {
			main: '#C6E5E8 ',
		},
		success: {
			main: '#66bb6a',
		},
		blue: {
			main: '#00A6B8',
		},
		lightBlue: {
			main: '#C6E5E8',
		},
		lightYellow: {
			main: '#fedc97',
		},
		white: {
			main: '#ffffff',
		},
		black: {
			main: '#000000',
		},
		darkGray: {
			main: '#484848',
		},
		lightGray: {
			main: '#4848480a',
		},
	},
	typography: {
		fontFamily: 'Montserrat, Arial, sans-serif',
		h1: {
			fontSize: '6rem',
			fontWeight: 500,
			lineHeight: 1.167,
			letterSpacing: '-0.01562em',
		},
		h2: {
			fontWeight: 500,
			fontSize: '3.75rem',
			lineHeight: 1.2,
			letterSpacing: '-0.00833em',
		},
		h3: {
			fontWeight: 500,
			fontSize: '3rem',
			lineHeight: 1.167,
			letterSpacing: '0em',
		},
		h4: {
			fontWeight: 500,
			fontSize: '2.125rem',
			lineHeight: 1.235,
			letterSpacing: '0.00735em',
		},
		h5: {
			fontWeight: 500,
			fontSize: '1.5rem',
			lineHeight: 1.334,
			letterSpacing: '0em',
		},
		h6: {
			fontWeight: 500,
			fontSize: '1.25rem',
			lineHeight: 1.6,
			letterSpacing: '0.0075em',
		},
		subtitle1: {
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: 1.75,
			letterSpacing: '0.00938em',
		},
		subtitle2: {
			fontWeight: 500,
			fontSize: '0.875rem',
			lineHeight: 1.57,
			letterSpacing: '0.00714em',
		},
		body1: {
			fontWeight: 400,
			fontSize: '1rem',
			lineHeight: 1.5,
			letterSpacing: '0.00938em',
		},
		body2: {
			fontWeight: 400,
			fontSize: '0.875rem',
			lineHeight: 1.43,
			letterSpacing: '0.01071em',
		},
		button: {
			fontWeight: 500,
			fontSize: '0.875rem',
			lineHeight: 1.75,
			letterSpacing: '0.02857em',
			textTransform: 'uppercase',
		},
		caption: {
			fontWeight: 400,
			fontSize: '0.75rem',
			lineHeight: 1.43,
			letterSpacing: '0.03333em',
		},
		overline: {
			fontWeight: 400,
			fontSize: '0.75rem',
			lineHeight: 2.66,
			letterSpacing: '0.08333em',
			textTransform: 'uppercase',
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained' },
					style: {
						color: 'white',
						borderRadius: 50,
					},
				},
				{
					props: { variant: 'outlined' || 'text' },
					style: {
						borderRadius: 50,
					},
				},
			],
		},
	},
});

export default theme;
