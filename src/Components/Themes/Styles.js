import {createGlobalStyle} from "styled-components"

export const Styles = createGlobalStyle

    `div {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    transition:all 0.50s linear;
}`