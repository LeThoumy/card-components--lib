import { styled } from '../stitches.config.js';
const Chip = styled('button', {
	/* ----------------------------- Default Styles ----------------------------- */
	display: 'flex',
	flexDirection: 'row',
	placeItems: 'center',
	backgroundColor: '$blueReg500',
	color: '$txtOverBg',
	p: '8px 12px 8px 20px',
	bdr: '32px',
	/* ---------------------------------- Utils --------------------------------- */
	'& svg': {
		fontSize: '20px',
	},
	variants: {
		size: {
			md: {
				fontFamily: 'codec',
				fontSize: '$xs',
				lineHeight: '16px',
				bdr: '$pill',
			},
			lg: {
				fontFamily: 'codec',
				fontSize: "$lg",
				lineHeight: '20px',
				bdr: '$pill',
			}
		},
		color: {
			blue: {
				backgroundColor: '$blueReg500',
				color: '$txtOverBg'
			},
			neutral: {
				backgroundColor: '$bgSecondaryTransparent'
			},
			subtle: {
				backgroundColor: '$blueAccent500Transparent'
			}

		},
	}
});

export default Chip