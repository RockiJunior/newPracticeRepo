import css from "styled-jsx/css";
import { breackPoints, fonts, colors } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);


export const globalStyles = css.globalStyles`
  html,
  body {
    background: radial-gradient(${backgroundColor} 1px, transparent 1px),
      radial-gradient(${backgroundColor} 1px, transparent 1px);
    background-position: 0 0, 25px, 25px;
    background-size: 50px 50px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
    color: ${colors.secondary};
  }
  * {
    box-sizing: cursive;
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    height: 100%;
    width: 100%;
  }

  @media (min-width: ${breackPoints.mobile}) {
    main {
      height: 90vh;
      width: ${breackPoints.mobile};
    }
  } ;
`;

