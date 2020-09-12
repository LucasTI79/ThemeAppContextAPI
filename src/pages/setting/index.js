import React  from 'react';
import { Switch } from 'react-native'
import { Wrapper, Title } from './styles';
import { useTheme } from '../../context/theme';
import themes from '../../theme';

export default function Setting(){
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
      setTheme(theme.title === 'light' ? themes.dark : themes.light);
    }
    return(
        <Wrapper>
            <Title>Setting</Title>
            <Switch
                onValueChange={ toggleTheme }
                value={title === 'dark'}
                trackColor={{ false: "#767577", true: "#000" }}
                thumbColor={toggleTheme ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
            />
        </Wrapper>
    )
}

// const { colors, title } = useContext(ThemeContext);
// return(
//     <ButtonTheme
//         onValueChange={ toggleTheme }
//         value={title === 'dark'}
//         trackColor={{ false: "#767577", true: "#000" }}
//         thumbColor={toggleTheme ? "#f5dd4b" : "#f4f3f4"}
//         ios_backgroundColor="#3e3e3e"
//     />
// )

//APP.js

// const [theme, setTheme] = useState(themes.light);

//     const toggleTheme = () => {
//       setTheme(theme.title === 'light' ? themes.dark : themes.light);
//     }