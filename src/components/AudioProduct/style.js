import styled from 'styled-components'

const AudioProductWrap = styled.div`
    background-color: rgba(255,255,255,0.1);
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    padding: 24px;
    width: 100%;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: rgba(255,255,255,0.12);
    }
`
const AudioProductInfo = styled.div`
    align-items: center;
    color: rgba(255,255,255,0.6);
    display: flex;
    flex-direction: row;
    font-size: 0.9em;
    font-weight: 300;
    justify-content: space-between;
    line-height: 100%;
    margin: 0;
    padding: 0;
`
const AudioProductTitle = styled.h3`
    color: white;
    font-size: 1.3em;
    font-weight: 600;
`
const DownloadButton = styled.a`
    background-color: rgba(255,255,255,0.3);
    border-radius: 24px;
    cursor: pointer;
    text-align: center;
    padding: 12px 24px;
    transition: background-color 240ms ease-in-out;

    &:hover {
        background-color: darkslateblue;
    }
`

export { AudioProductWrap, AudioProductInfo, AudioProductTitle, DownloadButton }