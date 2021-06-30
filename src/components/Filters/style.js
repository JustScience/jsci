import styled from 'styled-components'

const FiltersWrap = styled.section`
    padding: 0;
`
const FilterMenuTrigger = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    justify-content: flex-start;
    width: 180px;

    h4  {margin: 0;}
`

export { FiltersWrap, FilterMenuTrigger }