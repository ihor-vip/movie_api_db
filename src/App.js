import './App.css';
import {Header} from "./Components/Header/Header";
import {MoviesGrid} from "./Components/MoviesGrid/MoviesGrid";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Movie} from "./Components/Movie/Movie";
import {useState} from "react";
import {Styles} from "./Components/Themes/Styles";
import {lightTheme,darkTheme} from "./Components/Themes/Themes";
import {ThemeProvider} from "styled-components";
import {Container} from "@material-ui/core";



function App() {
    const [theme, setTheme] = useState ( 'light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }

    return (

        <BrowserRouter >
            <ThemeProvider theme = {theme === 'light'? lightTheme: darkTheme}>
                <div className={'app'}>
                        <button onClick = {themeToggler} className={'theme'}>Day/Night</button>
                        <Header/>
                           <Container className={'wrap'}>
                               <Switch>
                                   <Route path={'/'} component={MoviesGrid} exact/>
                                   <Route path={'/about'} component={Movie}/>
                               </Switch>
                           </Container>
                </div>
                <Styles/>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App