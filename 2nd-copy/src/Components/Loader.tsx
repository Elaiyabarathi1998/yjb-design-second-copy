import styled, { keyframes } from 'styled-components';

// Importing the logo image
import logo from '../images/logo.png'; // Adjust path if needed

// Blink animation for the text
const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

// Shake animation for the logo image
const shake = keyframes`
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;  /* Centers horizontally */
  align-items: center;      /* Centers vertically */
  position: fixed;          /* Fixes it in place */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Optional: Adds a background overlay */
  z-index: 9999;            /* Ensures the loader stays on top */
  flex-direction: column;   /* Stacks the image and text vertically */
`;

const LogoImage = styled.img`
  width: 100px;   /* Adjust the size of the logo */
  height: 100px;  /* Adjust the size of the logo */
  animation: ${shake} 1s ease-in-out infinite, ${blink} 1.5s linear infinite; /* Shake and blink animation */
`;

const Message = styled.div`
  margin-top: 10px; /* Space between the logo and text */
  font-size: 16px;
  color: white;     /* Optional: You can customize the text color */
  font-weight: bold; /* Optional: Makes the text bold */
  animation: ${blink} 1.5s linear infinite; /* Blink animation */
`;

export const Loading = () => {
    return (
        <LoaderWrapper>
            <LogoImage src={logo} alt="Loading..." />
            <Message>Please Wait</Message>
        </LoaderWrapper>
    );
};
