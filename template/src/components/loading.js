import styled, {ThemeProvider} from 'styled-components'

const LoadingWrapper = styled.h2`
    border-radius: 5px;
    box-shadow: 0px 0px 20px 100vh rgba(0,0,0,0.5);
    padding: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Loading = () => (
    <LoadingWrapper>
        Creating new checklist...
    </LoadingWrapper>
);

export default Loading;
