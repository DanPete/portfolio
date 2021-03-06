import { css } from 'styled-components'
import theme from './theme' 
import media from './media' 

const mixins = {


  bigButton: css`

    font-weight: bold;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: ${theme.colors.light};
    background-color: ${theme.colors.darkBlue};
    border: 1px solid ${theme.colors.clearlinkBlue};
    box-shadow: ${theme.boxShadow};

    &:hover {
      box-shadow: none;
      background-color: ${theme.colors.darkBlueLighter};
    }
    ${'' /* color: ${theme.colors.clearlinkBlue};
    background-color: transparent;
    border: 1px solid ${theme.colors.clearlinkBlue};
    padding: 1.25em 1.75em;
    font-size: 1rem;
    text-decoration: none;
    cursor: pointer;
    transition: ${theme.transition};
    border-radius: ${theme.borderRadius};
    &:hover {
      background-color: ${theme.colors.blueGray}
    } */}
  `,

  navButton : css`
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 30px;
    width: 30px;
    > div {
      transition: background-color ${theme.specificTransition} .3s, width ${theme.specificTransition} 0s, transform ${theme.specificTransition};
      background-color: ${theme.colors.light};
      &:first-of-type {
        width: 100%;
        height: 2px;
        margin-bottom: 10px;
      }
      &:nth-of-type(2) {
        width: 50%;
        height: 2px;
        align-self: flex-end;
      }
    }
    &:hover {
      cursor: pointer;
      > div {
        &:first-of-type {
          align-self: flex-start;
          width: 50%;
        }
        &:nth-of-type(2) {
          width: 100%;
        }
      }
    }
    &.scrolled,
    &.open {
      > div {
        background-color: ${theme.colors.dark};
        transition-delay: 0s;
      }
    }
    &.open {
      > div {
        transition: background-color ${theme.specificTransition} 0s, width ${theme.specificTransition} 0s, transform ${theme.specificTransition} .2s;
        &:first-of-type {
          transform: translateY(6px) rotate(45deg);
          width: 100%;
        }
        &:nth-of-type(2) {
          transform: translateY(-6px) rotate(-45deg);
          width: 100%;
        }
      }
    }
    ${media.mediumUp} {
      display: none;
    }
  `,
}

export default mixins