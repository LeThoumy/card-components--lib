import { styled, globalCss } from '../stitches.config'
import Head from 'next/head'
import Label from '../components/Label'
import Chip from '../components/Chip'
import ArrowSvg from '../components/icons/ArrowSvg'
import BusIcon from '../components/icons/BusIcon'
import EticketIcon from '../components/icons/EticketIcon'
import ClockIcon from '../components/icons/ClockIcon'
import BathroomIcon from '../components/icons/BathroomIcon'
import WifiIcon from '../components/icons/WifiIcon'
import PassNumber from '../components/icons/PassNumber'
import BoltIcon from '../components/icons/BoltIcon'
import RefundIcon from '../components/icons/RefundIcon'
import UstlensilIcon from '../components/icons/UstlensilIcon'
import SeatXLIcon from '../components/icons/SeatXLIcon'


/* -------------------------- Utilities Components -------------------------- */
const IconisLight = styled('span', {
	'&.material-symbols-outlined': {
		color: '#91d9ff',
		backgoundColor: 'transparent',
	}
})
const IconisDark = styled('span', {
	'&.material-symbols-outlined': {
		color: 'hsla(205, 25%, 53%, 1)',
		backgoundColor: 'transparent',
	}
})
const LineisInformative = styled('hr', {
	backgroundColor: '$bdInformativeTransp',
	border: '0px',
	height: '1px',
	width: 'fit',
	ml: '$x2',
})


const Inline = styled('div', {
	display: "Flex",
	FlexDirection: 'row',
	justifyContent: 'space-between',
	rowGap: '$x2dot5',
})

const Stack = styled('div', {
	display: "Flex",
	flexDirection: 'column',
	justifyContent: 'space-between',
})

const SellableCard = styled('div', {
	/* --------------------------------- Layout --------------------------------- */
	display: "Flex",
	width: 'auto',
	flexDirection: 'column',
	justifyContent: 'space-between',
	py: '$x2',
	pr: '$x2',
	/* --------------------------------- Styling -------------------------------- */
	backgroundColor: '$bgPrimary',
	border: '1px solid $bdPrimary',
	boxShadow: '$md',
	bdr: '$4',
	/* ----------------------------- Repsonsivenessin' ----------------------------- */
	'@bp1': {
		width: '80vw'
	},
	'@bp2': {
		width: '60vw'
	},
	'@bp3': {
		width: '40vw'
	},
	'@bp4': {
		width: '25vw'
	},
	'@bp5': {
		width: '15vw'
	},
})

const SummaryCard = styled('div', {
	/* --------------------------------- Layout --------------------------------- */
	display: "Flex",
	width: 'auto',
	flexDirection: 'column',
	justifyContent: 'space-between',
	py: '$x2',
	pr: '$x2',
	/* --------------------------------- Styling -------------------------------- */
	backgroundColor: '$bgPrimary',
	border: '1px solid $bdPrimary',
	boxShadow: '$md',
	bdr: '$4',
	/* ----------------------------- Repsonsivenessin' ----------------------------- */
	'@bp1': {
		width: 'calc(80vw)'
	},
	'@bp2': {
		width: 'calc(60vw)'
	},
	'@bp3': {
		width: 'calc(40vw)'
	},
	'@bp4': {
		width: 'calc(25vw)'
	},
	'@bp5': {
		width: 'calc(15vw)'
	},
})

const SummaryCardContainer = styled('div', {
	width: 'fill',
	display: "Flex",
	flexDirection: 'column',
	p: '$x2 $x2 $x2 0',
	bdr: '$4',
	/* --------------------------------- Styling -------------------------------- */
	backgroundColor: '$bgPrimary',
	backgroundColor: '$bgPrimary',
	border: '1px solid $bdPrimary',
	boxShadow: '$sm',
})

const WithTopPanel = styled('div', {
	/* --------------------------------- Layout --------------------------------- */
	display: "Flex",
	width: 'auto',
	flexDirection: 'column',
	/* --------------------------------- Styling -------------------------------- */
	backgroundColor: '$bgPositive',
	border: '1px solid $bdPositive',
	boxShadow: '$md',
	bdr: '$4',
	/* ----------------------------- Repsonsivenessin' ----------------------------- */
	'@bp1': {
		width: 'calc(80vw + 16px)'
	},
	'@bp2': {
		width: 'calc(60vw + 16px)'
	},
	'@bp3': {
		width: 'calc(40vw + 16px)'
	},
	'@bp4': {
		width: 'calc(25vw + 16px)'
	},
	'@bp5': {
		width: 'calc(15vw + 16px)'
	},
})
const WithBottomPanel = styled('div', {
	/* --------------------------------- Layout --------------------------------- */
	display: "Flex",
	width: 'auto',
	flexDirection: 'column',
	/* --------------------------------- Styling -------------------------------- */
	backgroundColor: '$bgInformative',
	border: '1px solid $bdInformative',
	boxShadow: '$md',
	bdr: '$4',
	/* ----------------------------- Repsonsivenessin' ----------------------------- */
	'@bp1': {
		width: 'calc(80vw + 16px)'
	},
	'@bp2': {
		width: 'calc(60vw + 16px)'
	},
	'@bp3': {
		width: 'calc(40vw + 16px)'
	},
	'@bp4': {
		width: 'calc(25vw + 16px)'
	},
	'@bp5': {
		width: 'calc(15vw + 16px)'
	},
})
const Main = styled('main', {
	display: 'Grid',
	placeItems: 'center',
	placeSelf: 'center',
	gap: '10vh',
	height: 'auto',
	py: '20vh',
})

const Box = styled('div', {
	'& img': {
		width: '100%',
	}
})

const BoxInline = styled('div', {
	display: 'inline-flex',
	justifyItems: 'center',
	alignItems: 'center',
})

const InlineisCentered = styled('div', {
	width: '100%',
	display: 'inline-flex',
	placeContent: 'center',
	alignItems: 'center',
})

export default function Home() {
	return (
		<Main css={{ backgroundColor: '#deeef5' }}>
			<Head>
				<title>🚍</title>
			</Head>
			{/* -------------------------------------------------------------------------- */
			 /*                           Sellable Card Component                          */
			 /* -------------------------------------------------------------------------- */}

			<SellableCard>
				<Inline>
					<Box css={{ maxWidth: '100px', ml: "$x2dot5" }}>
						<img src="../img/img--is-greyhound.png" alt="greyhound carrier logo" css={{ innerHeight: '100px' }} />
					</Box>
					<Inline>
						<BathroomIcon></BathroomIcon>
						<EticketIcon></EticketIcon>
						<WifiIcon></WifiIcon>
					</Inline>
				</Inline>
				<Inline css={{ my: "$x2dot5", mr: '-$xdot5', justifyContent: 'top', minWidth: 'fit-content' }}>
					<Stack css={{ mr: "10%", ml: "$x2dot5", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
						<Label size="xl" bold primary css={{ mb: "$xdot25" }}>8:00am</Label>
						<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Port Authority</Label>
						<Label size="xs" tertiary css={{ mb: "$xdot25" }}>NEW YORK CITY</Label>
						<Label size="md" bold link>Map</Label>
					</Stack>
					<Box css={{ pt: '2px' }} ><ArrowSvg></ArrowSvg></Box>
					<Stack css={{ ml: "10%", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
						<Label size="xl" bold primary css={{ mb: "$xdot25" }}>12:30pm</Label>
						<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Union Station</Label>
						<Label size="xs" tertiary css={{ mb: "$xdot25" }}>WASHINGTON</Label>
						<Label size="md" bold link>Map</Label>
					</Stack>
				</Inline>
				<Inline css={{ ml: "$x2", mr: '-$xdot5', mb: '-$base', alignItems: 'center' }}>
					<BoxInline>
						<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
							<BusIcon></BusIcon>
							<Label size="lg" secondary css={{ pl: '$xdot25' }}>Bus</Label>
						</Inline>
						<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
							<ClockIcon></ClockIcon>
							<Label size="lg" secondary css={{ pl: '$xdot25' }}>4h 30m</Label>
						</Inline>
					</BoxInline>
					<Inline css={{ mb: '-($base)' }}>
						<Chip size="lg">
							<Label size='lg' bold>$45</Label>
							<IconisLight as="span" className='material-symbols-outlined'>navigate_next</IconisLight>
						</Chip>
					</Inline>
				</Inline>
			</SellableCard>

			{/* -------------------------------------------------------------------------- */
			 /*                           Summary Card Component                           */
			 /* -------------------------------------------------------------------------- */}
			<SummaryCard>
				<Inline>
					<Box css={{ maxWidth: '100px', ml: "$x2dot5" }}>
						<img src="../img/img--is-greyhound.png" alt="greyhound carrier logo" css={{ innerHeight: '100px' }} />
					</Box>
					<Inline>
						<BathroomIcon></BathroomIcon>
						<EticketIcon></EticketIcon>
						<WifiIcon></WifiIcon>
					</Inline>
				</Inline>
				<Inline css={{ my: "$x2dot5", mr: '-$xdot5', justifyContent: 'top', minWidth: 'fit-content' }}>
					<Stack css={{ mr: "10%", ml: "$x2dot5", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
						<Label size="xl" primary css={{ mb: "$xdot25" }}>8:00am</Label>
						<Label size="md" tertiary css={{ mb: "$x2" }}>Wed, Jul 28</Label>
						<Label size="md" secondary bold css={{ mb: "$xdot25", flexShrink: '0' }}>Port Authority</Label>
						<Label size="xs" tertiary css={{ mb: "$xdot25" }}>NEW YORK CITY</Label>
						<Label size="md" bold link>Map</Label>
					</Stack>
					<Box css={{ pt: '2px' }} ><ArrowSvg></ArrowSvg></Box>
					<Stack css={{ ml: "10%", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
						<Label size="xl" primary css={{ mb: "$xdot25" }}>12:30pm</Label>
						<Label size="md" tertiary css={{ mb: "$x2" }}>Fri, Jul 30</Label>
						<Label size="md" bold secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Union Station</Label>
						<Label size="xs" tertiary css={{ mb: "$xdot25" }}>WASHINGTON</Label>
						<Label size="md" bold link>Map</Label>
					</Stack>
				</Inline>

				<Inline css={{ ml: "$x2", mr: '-$xdot5', mb: '-$base', alignItems: 'center' }}>
					<BoxInline>
						<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
							<BusIcon></BusIcon>
							<Label size="lg" secondary css={{ pl: '$xdot25' }}>Bus</Label>
						</Inline>
						<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
							<ClockIcon></ClockIcon>
							<Label size="lg" secondary css={{ pl: '$xdot25' }}>4h 30m</Label>
						</Inline>
						<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
							<PassNumber></PassNumber>
							<Label size="lg" secondary css={{ pl: '$xdot25' }}>2</Label>
						</Inline>
					</BoxInline>
					<Inline css={{ mb: '-($base)' }}>
						<Chip size="lg" color='neutral'>
							<Label size='lg' primary bold>Itinerary</Label>
							<IconisDark as="span" className='material-symbols-outlined'>navigate_next</IconisDark>
						</Chip>
					</Inline>
				</Inline>
			</SummaryCard>

			{/* ------------------------------------------------------------------------- */
			 /*                  Summary Card Component/Panel Option/Top                  */
			 /* ------------------------------------------------------------------------- */}
			<WithTopPanel>
				<InlineisCentered css={{ py: '$base' }}>
					<BoltIcon></BoltIcon>
					<Label size="sm" positive bold css={{ pl: '$xdot25' }}>Fastest</Label>
				</InlineisCentered>
				<SummaryCardContainer>
					<Inline>
						<Box css={{ maxWidth: '100px', ml: "$x2dot5" }}>
							<img src="../img/img--is-greyhound.png" alt="greyhound carrier logo" css={{ innerHeight: '100px' }} />
						</Box>
						<Inline>
							<BathroomIcon></BathroomIcon>
							<EticketIcon></EticketIcon>
							<WifiIcon></WifiIcon>
						</Inline>
					</Inline>
					<Inline css={{ my: "$x2dot5", mr: '-$xdot5', justifyContent: 'top', minWidth: 'fit-content' }}>
						<Stack css={{ mr: "10%", ml: "$x2dot5", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
							<Label size="xl" bold primary css={{ mb: "$xdot5" }}>8:00am</Label>
							<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Port Authority</Label>
							<Label size="xs" tertiary css={{ mb: "$xdot25" }}>NEW YORK CITY</Label>
							<Label size="md" bold link>Map</Label>
						</Stack>
						<Box css={{ pt: '2px' }} ><ArrowSvg></ArrowSvg></Box>
						<Stack css={{ ml: "10%", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
							<Label size="xl" bold primary css={{ mb: "$xdot5" }}>12:30pm</Label>
							<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Union Station</Label>
							<Label size="xs" tertiary css={{ mb: "$xdot25" }}>WASHINGTON</Label>
							<Label size="md" bold link>Map</Label>
						</Stack>
					</Inline>
					<Inline css={{ ml: "$x2", mr: '-$xdot5', mb: '-$base', alignItems: 'center' }}>
						<BoxInline>
							<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
								<BusIcon></BusIcon>
								<Label size="lg" secondary css={{ pl: '$xdot25' }}>Bus</Label>
							</Inline>
							<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
								<ClockIcon></ClockIcon>
								<Label size="lg" secondary css={{ pl: '$xdot25' }}>4h 30m</Label>
							</Inline>
						</BoxInline>
						<Inline css={{ mb: '-($base)' }}>
							<Chip size="lg">
								<Label size='lg' bold>$45</Label>
								<IconisLight as="span" className='material-symbols-outlined'>navigate_next</IconisLight>
							</Chip>
						</Inline>
					</Inline>
				</SummaryCardContainer>
			</WithTopPanel>

			{/* ------------------------------------------------------------------------- */
 			 /*                 Summary Card Component/Panel Option/Bottom                */
 			 /* ------------------------------------------------------------------------- */}
			<WithBottomPanel>
				<SummaryCardContainer>
					<Inline>
						<Box css={{ maxWidth: '100px', ml: "$x2dot5" }}>
							<img src="../img/img--is-greyhound.png" alt="greyhound carrier logo" css={{ innerHeight: '100px' }} />
						</Box>
						<Inline>
							<BathroomIcon></BathroomIcon>
							<EticketIcon></EticketIcon>
							<WifiIcon></WifiIcon>
						</Inline>
					</Inline>
					<Inline css={{ my: "$x2dot5", mr: '-$xdot5', justifyContent: 'top', minWidth: 'fit-content' }}>
						<Stack css={{ mr: "10%", ml: "$x2dot5", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
							<Label size="xl" bold primary css={{ mb: "$xdot25" }}>8:00am</Label>
							<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Port Authority</Label>
							<Label size="xs" tertiary css={{ mb: "$xdot25" }}>NEW YORK CITY</Label>
							<Label size="md" bold link>Map</Label>
						</Stack>
						<Box css={{ pt: '2px' }} ><ArrowSvg></ArrowSvg></Box>
						<Stack css={{ ml: "10%", flexGrow: '1', flexShrink: '16ch', flexBasis: '0%' }}>
							<Label size="xl" bold primary css={{ mb: "$xdot5" }}>12:30pm</Label>
							<Label size="lg" secondary css={{ mb: "$xdot25", flexShrink: '0' }}>Union Station</Label>
							<Label size="xs" tertiary css={{ mb: "$xdot25" }}>WASHINGTON</Label>
							<Label size="md" bold link>Map</Label>
						</Stack>
					</Inline>
					<Inline css={{ ml: "$x2", mr: '-$xdot5', mb: '-$base', alignItems: 'center' }}>
						<BoxInline>
							<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
								<BusIcon></BusIcon>
								<Label size="lg" secondary css={{ pl: '$xdot25' }}>Bus</Label>
							</Inline>
							<Inline css={{ pr: '$base', pt: '$base', alignItems: 'center' }}>
								<ClockIcon></ClockIcon>
								<Label size="lg" secondary css={{ pl: '$xdot25' }}>4h 30m</Label>
							</Inline>
						</BoxInline>
						<Inline css={{ mb: '-($base)' }}>
							<Label size='lg' tertiary bold css={{ mr: '$x2' }}>Multiple options:</Label>
						</Inline>
					</Inline>
				</SummaryCardContainer>
				<Box css={{ alignItems: 'center' }}>
					<Inline css={{ padding: '0px 8px 0 20px', margin: '$base 0px', alignItems: 'center' }}>
						<Label size='lg' primary bold>Regular</Label>
						<Chip size="lg" color="subtle">
							<Label size='lg' css={{ color: '$blueMuted' }} bold>$45</Label>
							<IconisDark as="span" className='material-symbols-outlined'>navigate_next</IconisDark>
						</Chip>
					</Inline>

					<LineisInformative></LineisInformative>
					<Inline css={{ padding: '0px 8px 0 $x2dot5', margin: '$base 0px', alignItems: 'center' }}>
						<BoxInline>
							<Label size='lg' primary bold>First Class</Label>
							<RefundIcon></RefundIcon>
							<SeatXLIcon></SeatXLIcon>
							<UstlensilIcon></UstlensilIcon>
						</BoxInline>
						<Chip size="lg" color="subtle">
							<Label size='lg' css={{ color: '$blueMuted' }} bold>$95</Label>
							<IconisDark as="span" className='material-symbols-outlined'>navigate_next</IconisDark>
						</Chip>
					</Inline>
				</Box>
			</WithBottomPanel>
		</Main>
	)
}
