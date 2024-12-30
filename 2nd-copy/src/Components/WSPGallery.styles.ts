import styled, { css, keyframes } from 'styled-components';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

// Extend the IconBaseProps interface to include the 'disabled' prop
interface IconProps extends IconBaseProps {
  disabled?: boolean;
}

// Animations
export const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
`;

export const glowingBorder = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 223, 0, 0.5); /* Yellow */
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.7); /* Red */
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 223, 0, 0.5); /* Yellow */
  }
`;



export const Loader = styled.div`
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  background: #2e5077;
  color: #ffffff;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 5px solid #55aaff;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2);
  z-index: 10;
  border-radius: 0 0 15% 15%;

  .three-dot {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    color: #ffffff;
    font-size: 24px;
  }

   .search-bar {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 5px;
    border-radius: 30px;
    width: 60%;
    max-width: 300px;

    input {
      border: none;
      outline: none;
      padding: 8px 12px;
      width: 90%;
      border-radius: 30px;
      font-size: 1rem;
    }

    .search-icon {
      font-size: 1.5rem;
      margin-left: 10px;
      color: #2e5077;
    }
  }

  @media (max-width: 768px) {
    .search-bar {
      width: 70%; /* Reduced width for smaller screens */
      max-width: 250px; /* Ensure it doesn't stretch too much */
    }

    input {
      font-size: 0.9rem; /* Adjust input font size for better alignment */
    }
  }


  .offer-text {
    font-size: 1.2rem;
    color: #ffffff;
    margin-top: 50px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-top: 50px;
    }
  }

  .icon-boxes {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Wrap to the next row if needed */
  gap: 10px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 5px; /* Reduce gap on smaller screens */
    justify-content: space-evenly; /* Better alignment */
  }
}

.icon-box {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 10px; /* Reduce padding */
  border-radius: 10px;
  width: 60px;
  height: 60px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  transition: all 0.3s ease-in-out;

  &:hover {
    animation: glowing 1.5s infinite alternate;
  }

  @media (max-width: 768px) {
    width: 45px; /* Reduce box width */
    height: 45px; /* Reduce box height */
    margin: 5px; /* Reduce margin */
  }
}

.icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  transition: all 0.3s ease-in-out;

  .icon-box:hover & {
    filter: brightness(1.2);
    box-shadow: 0 0 20px #fff, 0 0 30px #00aaff, 0 0 40px #00aaff;
  }

  @media (max-width: 768px) {
    width: 35px; /* Reduce icon width */
    height: 35px; /* Reduce icon height */
  }
}


  .burger-menu {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    color: #ffffff;
    font-size: 24px;
  }

  .dropdown {
    background-color: #ffffff;
    color: #333;
    border: 1px solid #ddd;
    border-radius: 8px;
    width: 200px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 20px;
    right: 20px;

    @media (max-width: 768px) {
      width: 100%;
      top: 60px;
      right: 0;
      padding: 15px;
    }
  }

  .dropdown ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .dropdown li {
    padding: 10px;
    font-size: 1rem;
    cursor: pointer;
  }

  .dropdown li:hover {
    background-color: #f0f0f0;
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    font-size: 24px;
    color: #333;

    &:hover {
      color: #f00;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;

    .search-bar {
      width: 80%;
    }

    .burger-menu {
      display: block;
    }
  }
`;





// Gallery Grid Wrapper
export const GalleryWrap = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  scroll-behavior: smooth;  /* Enables smooth scrolling */

  @media (max-width: 480px) {
    gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  }
`;

// Single Gallery Image
export const hoverAndActiveStyles = css`
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 10px rgba(0, 255, 127, 0.4); /* Light Green */
  }
  &:active {
    animation: ${clickAnimation} 0.5s;
  }
`;

export const Single = styled.div`
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  /* 3D shadow with glowing animation */
  border: 2px solid rgba(0, 255, 127, 0.2); /* Light Green */
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1), 5px 10px 20px rgba(135, 206, 235, 0.6); /* 3D shadow effect */
  animation: ${glowingBorder} 2s infinite alternate;

  /* Hover effect for the 3D shadow */
  &:hover {
    box-shadow: 0px 12px 25px rgba(0, 0, 0, 0.2), 5px 15px 30px rgba(0, 255, 127, 0.7); /* Enhanced shadow on hover */
    transform: scale(1.1) translateY(-5px); /* Slight 3D effect on hover */
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    ${hoverAndActiveStyles} /* Apply shared hover and active styles */
  }
`;

// Footer
export const StyledFooter = styled.footer`
  background: #2E5077;  /* Matching Header color */
  color: #ffffff;       /* White text color */
  padding: 20px;
  text-align: center;
  width: 100%;
  bottom: 0;
  border-top: 5px solid #55aaff; /* Blue border */
  box-shadow: 0px -8px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    width: 90%;
  }

  p {
    margin: 0;
    font-size: 1rem;
    color: #ffffff;  /* White text for the footer paragraph */
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  }

  .contact-details {
    margin-top: 10px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        margin: 10px 0;
        font-size: 1.1rem;
        color: #ffffff; /* White text for contact details */

        a {
          color: #ffffff;
          font-weight: bold;
          text-decoration: none;
          transition: color 0.3s, text-shadow 0.3s;

          &:hover {
            color: #55aaff;
            text-decoration: underline;
            text-shadow: 0 0 10px rgba(85, 170, 255, 1), 0 0 20px rgba(85, 170, 255, 1), 0 0 30px rgba(85, 170, 255, 1);
          }

          display: flex;
          align-items: center;
          
          svg {
            margin-right: 8px;  /* Space between icon and text */
          }
        }
      }
    }
  }
`;

// Floating Button Component
export const FloatingButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000; /* Ensure it's on top */
  width: 60px;
  height: 60px;
  background-color: #007bff; /* Blue background */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Slight enlarge on hover */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* More shadow on hover */
  }
`;

// Animation Keyframes
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

// Rectangular Box Component
export const RectangularBox = styled.div<{ isOpen: boolean }>`
  position: fixed;
  bottom: 30px;
  right: 100px;
  width: 300px;
  height: 50px;
  background-color: #f8f9fa; /* Light gray background */
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  animation: ${(props) => (props.isOpen ? slideIn : slideOut)} 0.5s ease-in-out;
  transform: ${(props) => (props.isOpen ? "translateX(0)" : "translateX(100%)")};
`;

export const Tooltip = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1002;
  opacity: 0.9;
  
`;


export const SliderWrap = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: linear-gradient(45deg, rgba(135, 206, 235, 0.9), rgba(0, 255, 127, 0.9)); /* Light Blue to Light Green gradient */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5); /* 3D shadow effect */

  .btnClose,
  .btnPrev,
  .btnNext {
    position: fixed;
    cursor: pointer;
    opacity: 0.8;
    color: #fff;
    z-index: 9999;
    font-size: 2rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Add shadow for button text/icons */
    transition: opacity 0.3s ease, transform 0.2s ease;

    &:hover {
      opacity: 1;
      transform: scale(1.1); /* Slight zoom-in on hover */
    }
  }

  .btnClose {
    top: 20px;
    right: 20px;

    @media (min-width: 600px) {
      top: 40px;
      right: 40px;
    }
  }

  .btnPrev,
  .btnNext {
    top: 50%;
    transform: translateY(-50%);
  }

  .btnPrev {
    left: 10px;

    @media (min-width: 600px) {
      left: 40px;
    }
  }

  .btnNext {
    right: 10px;

    @media (min-width: 600px) {
      right: 40px;
    }
  }
`;

export const FullScreenImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    pointer-events: none;
    user-select: none;

    /* Border */
    border: 5px solid rgba(255, 255, 255, 0.7);

    /* 3D Shadow */
    box-shadow: 
      0px 15px 30px rgba(0, 0, 0, 0.5),  /* Main shadow */
      0px 5px 15px rgba(0, 0, 0, 0.3),  /* Inner soft shadow */
      inset 0px -5px 10px rgba(0, 0, 0, 0.2); /* Inset shadow for depth */

    /* Rounded corners */
    border-radius: 15px;

    /* Background gradient */
    background: linear-gradient(45deg, rgba(135, 206, 235, 0.6), rgba(0, 255, 127, 0.6));

    /* 3D Perspective Effect */
    transform: perspective(500px) rotateX(5deg) rotateY(-5deg);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    /* Add hover effect for interactivity */
    &:hover {
        transform: perspective(500px) rotateX(0deg) rotateY(0deg) scale(1.05);
        box-shadow: 
          0px 25px 50px rgba(0, 0, 0, 0.6), /* Enhanced shadow on hover */
          0px 10px 20px rgba(0, 0, 0, 0.4);
    }
}
`;

export const starAnimation = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;





export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ContentLeft = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Stars = styled.div`
  display: flex;
  margin-right: 10px;
  animation: ${starAnimation} 0.5s ease-out forwards;
`;

export const Star = styled.span`
  color: gold;
  font-size: 20px;
  margin-right: 5px;
`;

export const RatingNumber = styled.span`
  font-size: 18px;
  color: #333;
`;

export const ViewValue = styled.div`
  font-size: 16px;
  color: #555;
  margin-bottom: 10px;
  animation: ${fadeInAnimation} 0.5s ease-in forwards;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

export const HeartIcon = styled(FaHeart) <IconProps>`
  cursor: pointer;
  color: ${(props) => (props.disabled ? '#d3d3d3' : '#ff0000')}; 
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  `}
`;

export const LikeIcon = styled(FaThumbsUp) <IconProps>`
  cursor: pointer;
  color: ${(props) => (props.disabled ? '#d3d3d3' : '#0084ff')};
  ${(props) =>
    props.disabled &&
    `
    opacity: 0.5;
    pointer-events: none;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
  `}
`;

export const ReviewBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
