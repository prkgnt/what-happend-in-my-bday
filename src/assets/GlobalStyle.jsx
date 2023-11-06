import { createGlobalStyle } from "styled-components";
import GmarketFont from "./font/GmarketSansTTFMedium.ttf";
import GmarketLightFont from "./font/GmarketSansTTFLight.ttf";
import GmarketBoldFont from "./font/GmarketSansTTFBold.ttf";

const GlobalFont = createGlobalStyle`
    @font-face {
        font-family: "Gmarket";
        src: local("Gmarket"),
        url(${GmarketFont}) format('truetype');
    }
    @font-face {
        font-family: "GmarketBold";
        src: local("Gmarket"),
        url(${GmarketBoldFont}) format('truetype');
    }
    @font-face {
        font-family: "GmarketLight";
        src: local("Gmarket"),
        url(${GmarketLightFont}) format('truetype');
    }
`;

export default GlobalFont;
