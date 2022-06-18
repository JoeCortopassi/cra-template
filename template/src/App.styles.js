import styled from 'styled-components'

export const AppWrapper = styled.div`
    background-color: ${props => props.theme.background.app};
    overflow: scroll;
    position: relative;
    height: 100%;
    margin: 0 auto;
    text-transform: capitalize;

    @media screen and (min-width: 1023px) {
        width: 1024px;
    }
    @media screen and (max-width: 1023px) {
        min-width: 200px;
    }
`

