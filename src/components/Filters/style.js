import styled from 'styled-components'

const FiltersWrap = styled.section`
    padding: 0;
    width: 100%;
`
const FilterMenuTrigger = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
    justify-content: flex-start;

    h4  {margin: 0;}
`

export { FiltersWrap, FilterMenuTrigger }