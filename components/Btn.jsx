import { styled } from '../stitches.config.js';


const Btn = styled('button', {
	variants: {
		size: {
			md: {
				fontFamily: 'codec',
				fontSize: '$xs',
				lineHeight: '16px',
				bdr: '$pill',
				p: '$8 $16'
			},
			lg: {
				fontFamily: 'codec',
				fontSize: '48px',
				lineHeight: '20px',
				bdr: '$pill',
				p: '$8 $20'
			}
		},
		color: {
			blue: {
				backgroundColor: '$blueReg500',
				color: '$txtOverBg'
			},
			neutral: {
				backgroundColor: '$bgSecondaryTransparent'
			}
		},
	}
});
export default Btn
