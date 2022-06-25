import { styled } from '../stitches.config.js';

const Label = styled('span', {
	/* -------------------------------- Variants -------------------------------- */
	variants: {
		bold: {
			true: {
				fontFamily: 'codec-bold',
				fontWeight: '500',
			}
		},
		size: {
			xs: {
				fontSize: '$xs',
				lineHeight: '12px'
			},
			sm: {
				fontSize: '$sm',
				lineHeight: '12px'
			},
			md: {
				fontSize: '$md',
				lineHeight: '16px'
			},
			lg: {
				fontSize: '$lg',
				lineHeight: '20px'
			},
			xl: {
				fontSize: '$xl',
				lineHeight: '20px'
			}
		},
		primary: {
			true: {
				color: "$txtPrimary"
			}
		},
		secondary: {
			true: {
				color: '$txtSecondary'
			}
		},
		tertiary: {
			true: {
				color: "$txtTertiary"
			}
		},
		positive: {
			true: {
				color: "$txtPositive"
			}
		},
		onBg: {
			true: {
				color: "$txtOverBg"
			}
		},
		link: {
			true: {
				cursor: 'pointer',
				color: "$txtLink",
				'&:hover': {
					opacity: '0.7',
					transition: 'opacity 0.3s ease'
				}
			}
		}
	}
});

export default Label