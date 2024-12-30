
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { GalleryWrap, Single, SliderWrap, FullScreenImage, StyledFooter, HeartIcon, LikeIcon, CardContent, CardImage, IconsWrapper, ContentLeft, Rating, Star, Stars, ViewValue, Image, HeaderContainer, FloatingButton, Tooltip, RectangularBox } from './WSPGallery.styles';
import { FaBars, FaInstagram, FaPhoneAlt, FaWhatsapp, FaEllipsisV, FaSearch, FaTimes } from 'react-icons/fa';
import img1 from '../images/img1.png';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';

interface GalleryImage {
  img: string;
}

interface WSPGalleryProps {
  galleryImages: GalleryImage[];
}

const WSPGallery: React.FC<WSPGalleryProps> = ({ galleryImages }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [liked, setLiked] = useState<boolean[]>(new Array(galleryImages.length).fill(false));
  const [hearted, setHearted] = useState<boolean[]>(new Array(galleryImages.length).fill(false));
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTooltipVisible(true);
      setTimeout(() => setIsTooltipVisible(false), 3000); // Show tooltip for 3 seconds
    }, 10000); // Every 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);


  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleFloatingButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenModal = (index: number) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber((prev) =>
      prev + 1 === galleryImages.length ? 0 : prev + 1
    );
  };

  const handleHeartClick = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the image from being opened
    setHearted((prev) => {
      const newHearted = [...prev];
      newHearted[index] = !newHearted[index]; // Toggle the heart icon state
      return newHearted;
    });
  };

  const handleLikeClick = (index: number, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the image from being opened
    setLiked((prev) => {
      const newLiked = [...prev];
      newLiked[index] = !newLiked[index]; // Toggle the like icon state
      return newLiked;
    });
  };



  return (
    <div>
      {/* Header */}
      <HeaderContainer>
  {/* Three-Dot Icon in the Top-Left */}
  <div className="three-dot">
    <FaEllipsisV />
  </div>

  {/* Search Bar in the Middle */}
  <div className="search-bar">
    <input type="text" placeholder="Search..." />
    <FaSearch className="search-icon" />
  </div>

  {/* Offer Text */}
  <p className="offer-text">
    We are offering graphic designing works. If you need, Please reach out to us!
  </p>

  {/* Icon Boxes */}
  <div className="icon-boxes">
    <div className="icon-box">
      <img src={img1} alt="Photoshop" className="icon" />
    </div>
    <div className="icon-box">
      <img src={img2} alt="Figma" className="icon" />
    </div>
    <div className="icon-box">
      <img src={img3} alt="Illustrator" className="icon" />
    </div>
    <div className="icon-box">
      <img src={img4} alt="CorelDraw" className="icon" />
    </div>
  </div>

 {/* Burger Menu Button */}
<div className="burger-menu" onClick={toggleDropdown}>
  <FaBars />
</div>

{/* Dropdown Menu */}
{isDropdownOpen && (
  <div className="dropdown">
    {/* Close Button */}
    <div className="close-button" onClick={toggleDropdown}>
      <FaTimes />
    </div>
    
    <ul>
      <li>Logo Design</li>
      <li>Website Design</li>
      <li>Social Media Graphics</li>
      <li>Branding</li>
      <li>UI/UX Design</li>
    </ul>
  </div>
)}

</HeaderContainer>



      {openModal && galleryImages.length > 0 && (
        <SliderWrap>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btnClose"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btnPrev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btnNext"
            onClick={nextSlide}
          />
          <FullScreenImage>
            <img
              src={galleryImages[slideNumber]?.img || ''}
              alt={`Slide ${slideNumber + 1}`}
            />
          </FullScreenImage>
        </SliderWrap>
      )}

      {/* Gallery */}
      <GalleryWrap>
      {galleryImages.length > 0 ? (
        galleryImages.map((slide, index) => {
          const randomRating = Math.floor(Math.random() * 5) + 1; 
          const randomViewCount = Math.floor(Math.random() * 1000) + 1;
          const stars = Array.from({ length: randomRating }, (_, i) => <Star key={i}>★</Star>);
          

          return (
            <Single key={index} onClick={() => handleOpenModal(index)}>
              <CardContent>
                <CardImage>
                  <Image src={slide.img} alt={`Thumbnail ${index + 1}`} />
                </CardImage>
                <ContentLeft>
                  <Rating>
                    <Stars>{stars}</Stars>
                    <IconsWrapper>
                      {/* Heart Icon */}
                      <HeartIcon
                        disabled={hearted[index]}
                        onClick={(e) => handleHeartClick(index, e)} // Handle heart click
                      />
                      {/* Like Icon */}
                      <LikeIcon
                        disabled={liked[index]}
                        onClick={(e) => handleLikeClick(index, e)} // Handle like click
                      />
                    </IconsWrapper>
                  </Rating>
                  <ViewValue>Views: {randomViewCount}</ViewValue>
                </ContentLeft>
              </CardContent>
            </Single>
          );
        })
      ) : (
        <p>No images available</p>
      )}
    </GalleryWrap>


      {/* Footer */}
      
<StyledFooter>
  <p>© 2024 Gallery. All rights reserved.</p>
  
  <div className="contact-details">
    <p>Contact us</p> 
    <ul>
      <li>
        <a href="https://wa.me/+919965738658" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp /> WhatsApp: +919965738658
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/iam_yjloki?igsh=czZtYnpsYmFxdnF6" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram: @iam_yjloki
        </a>
      </li>
      <li>
        <a href="tel:+919965738658">
          <FaPhoneAlt /> Phone: +919965738658
        </a>
      </li>
      <li>
        <a href="tel:+919360013342">
          <FaPhoneAlt /> Phone: +919360013342
        </a>
      </li>
    </ul>
  </div>
</StyledFooter>

{/* Tooltip */}
<p>Your gallery content goes here...</p>

{/* Tooltip */}
{isTooltipVisible && (
  <Tooltip>
    Please contact us for more details.
  </Tooltip>
)}
<FloatingButton onClick={handleFloatingButtonClick}>
        <FontAwesomeIcon icon={faPlus} />
      </FloatingButton>
      {isOpen && (
  <RectangularBox isOpen={isOpen}>
    Please contact us for more details
  </RectangularBox>
)}


    </div>
  );
};

export default WSPGallery;


