import styled from 'styled-components'

// COMPONENT STYLING
const IconPath = styled.svg.attrs({
	/*--SVG SETTINGS--*/
	enableBackground:'new 0 0 24 24', 
	version:'1.1', 
	viewBox:'0 0 24 24'
})`
	// SVG STYLING
	background: transparent;
	box-sizing: border-box;
	display: ${props =>
		props.Block ? 'block'
		: 'inline'};
	fill: ${props =>
		props.color ? props.color :
		'white'};
	height: ${props =>
		props.height ? props.height
		: '48px'};
	margin: ${props =>
		props.margin ? props.margin
		: '0'};
	padding: ${props =>
		props.padding ? props.padding
		: '0'};
	width: ${props =>
		props.width ? props.width
		: '48px'};
`

export default IconPath
