import styled from 'styled-components'

const KitList = styled.ul`
    display: grid;
    gap: 8px;
    grid-template-columns: 3fr 3fr 3fr;
`
const KitCardWrap = styled.a.attrs( props => {
    return {
      href: props.href ? props.href : '#',
      rel: 'noopener noreferrer',
      target: '_blank'
    }
})`
    background-color: rgba(255,255,255,0.15);
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 16px;
    transition: background-color 240ms ease-in-out;

    h4,p {margin: 0;}

    &:hover {
        background-color: rgba(255,255,255,0.3);
    }
`

export { KitList, KitCardWrap }