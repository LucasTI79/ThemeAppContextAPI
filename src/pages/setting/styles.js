import styled from 'styled-components/native';
import { useTheme } from '../../context/theme';

const { theme } = useTheme()

export const Wrapper = styled.View`
    background: ${theme.colors.background};
    flex:1;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    color: ${theme.colors.color};
    font-size: 44px;
`;
