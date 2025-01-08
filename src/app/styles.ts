import styled from "styled-components";
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

export const Container = styled.div`
    position: relative;

    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
`

export const Header = styled.div`
    width: 100%;
    height: 5rem;
    padding: 1rem 1rem 1rem 7rem;

    display: flex;

    background-color: #FFFFFF;
`;

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 5rem);

    display: flex;
    justify-content: center;

    background-image: linear-gradient(rgb(59 59 59 / 10%), rgb(0 15 65));
    
    @media (max-width: 769px) {
        height: auto;
        padding-top: 2rem;

        gap: 2rem;
        align-items: center;
        flex-direction: column;
    }

    @media (max-width: 479px) {
        gap: 1rem;
    }
`

export const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 2rem;

    gap: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background: transparent;

    @media (max-width: 769px) {
        width: 100%;
        padding: 2rem;

        flex-direction: column;
    }

    @media (max-width: 479px) {
        padding: 1rem;
    }
`

export const Description = styled.div`
     width: 100%;
     height: 560px;
     max-width: 500px;
     padding-top: 2rem;

    gap: 1rem;
    display: flex;
    flex-direction: column;

    background-color: transparent;

    >span{
      color: #4bff4a;
      font-weight: bold;
      font-size: 20px;
      line-height: 1.625rem;
      font-family: ${nunitoSans.style.fontFamily}, sans-serif;
    }

    >h1{
      color: #FFFFFF;
      font-weight: bold;
      font-size: 48px;
      line-height: normal;
      font-family: ${nunitoSans.style.fontFamily}, sans-serif;
    }

    >p{
      color: #FFFFFF;
      font-weight: 400;
      font-size: 20px;
      line-height: 1.625rem;
      font-family: ${nunitoSans.style.fontFamily}, sans-serif;
    }

    @media (max-width: 769px) {
      height: auto;
      max-width: 100%;
    }
`;

export const Form = styled.div`
  width: 100%;
  padding: 2.5rem;
  max-width: 25.5rem;

  gap: 1.5rem;
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  background-color: #FFFFFF;
  box-shadow: 0 0.25rem 0.75rem rgba(33,36,41,0.14);

  > h2 {
    color: #212429;
    font-weight: bold;
    font-size: 1.625rem;
    line-height: 1.625rem;
    font-family: ${nunitoSans.style.fontFamily}, sans-serif;
  }

  >div:nth-of-type(2),
  >div:nth-of-type(3),
  >div:nth-of-type(4){
    height: 4.063rem;
  }

  input {
    width: 100%;

    border-radius: 4px;
  }

  input:-webkit-autofill {
    background-color: transparent !important;
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  input:-webkit-autofill:focus {
    background-color: transparent !important;
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  > button {
    width: 100%;
    height: auto;
    padding: 0.75rem;

    background-color: #4169E1;

    color: #FFFFFF;
    font-size: 1rem;
    line-height: 1rem;
    font-weight: bold;
    font-family: ${nunitoSans.style.fontFamily}, sans-serif;
  }

  @media (max-width: 479px) {
    padding: 2rem;
  }

  @media (max-width: 425px) {
    > p {
      margin: 0;

      font-size: 1.425rem;
      line-height: 1.425rem;
    }
  }
`;


export const FormDescription = styled.div`
    width: 100%;
    height: auto;

    gap: 1rem;
    display: flex;
    flex-direction: column;

    p {
    color: #212429;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.125rem;
    font-family: ${nunitoSans.style.fontFamily}, sans-serif;
  }
`