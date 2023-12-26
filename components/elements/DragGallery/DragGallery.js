import React, { useEffect } from 'react';
import Slider from 'react-slick';

import Image from 'next/image';

import dragCursor from 'assets/img/CursorDRAG.png';

const DragGallery = ({ images }) => {
  const inStyle = {
    backgroundImage: `url(${dragCursor.src})`,
    height: dragCursor.height,
    width: dragCursor.width,
    zIndex: 90,
    position: 'absolute',
    transform: 'translate(-50 %, -100 %)',
    boxSizing: 'border-box',
    opacity: 0,
  };

  useEffect(() => {
    const cursor = document.querySelector('.cursor-drag');
    const parent = document.getElementById('drag-cursor');

    const addAttribute = (e) => {
      cursor.style.opacity = 1;
      document
        .getElementById('drag-cursor')
        .addEventListener('mousemove', positionElement);
    };

    const deleteAttribute = (e) => {
      cursor.style.opacity = 0;
      cursor.style.courser = 'auto';
      window.removeEventListener('mousemove', positionElement);
    };

    const positionElement = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      let bounds = parent.getBoundingClientRect();
      const cursorx = mouseX - bounds.left - cursor.offsetWidth / 2;
      const cursory = mouseY - bounds.top + 5;

      if (
        mouseY + cursor.offsetHeight / 2 > bounds.bottom &&
        cursor.style.opacity == 1
      ) {
        cursor.style.opacity = 0;
      } else if (mouseY < bounds.bottom) {
        cursor.style.opacity = 1;
      }

      cursor.style.left = `${cursorx}px`;
      cursor.style.top = `${cursory}px`;
    };

    document
      .getElementById('drag-cursor')
      .addEventListener('mousemove', positionElement);
    document
      .getElementById('drag-cursor')
      .addEventListener('mouseenter', addAttribute);
    document
      .getElementById('drag-cursor')
      .addEventListener('mouseleave', deleteAttribute);

    return () => {
      window.removeEventListener('mousemove', positionElement);
      window.removeEventListener('mouseenter', addAttribute);
      window.removeEventListener('mouseleave', deleteAttribute);
    };
  }, []);

  const settings = {
    className: 'slider variable-width',
    dots: false,
    infinite: true,
    variableWidth: true,
    swipeToSlide: true,
  };

  return (
    <div
      id="drag-cursor"
      style={{ position: 'relative', cursor: 'none', overflow: 'hidden' }}
    >
      <div className="cursor-drag" style={inStyle}></div>
      <Slider {...settings}>
        {images.map((img, i) => {
          return <Image key={i} src={img.imageSrc} alt={img.altText} />;
        })}
      </Slider>
    </div>
  );
};

export default DragGallery;
