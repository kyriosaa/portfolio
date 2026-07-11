import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';
import styled from 'styled-components';

const StyledLoader = styled.div`
  ${({ theme }) => theme.mixins.flexCenter};
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: var(--navy);
  z-index: 99;

  .logo-wrapper {
    width: max-content;
    max-width: 100px;
    transition: var(--transition);
    opacity: ${props => (props.isMounted ? 1 : 0)};
    svg {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      fill: none;
      user-select: none;
      #B {
        opacity: 0;
      }
    }
  }

  .text-div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .name-text {
    margin-right: 8px;
  }

  .portfolio-text {
    color: var(--yellow);
  }
`;

const Loader = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });

    loader
      .add({
        targets: '.text-wrapper h1',
        delay: 300,
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 1,
      })
      .add({
        targets: '.text-wrapper h2',
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 1,
        offset: '-=500', // Starts fading in "Portfolio" halfway through "Name"
      })
      .add({
        targets: '.text-wrapper',
        delay: 500,
        duration: 1000,
        easing: 'easeInOutQuart',
        opacity: 0,
        scale: 0.9,
      })
      .add({
        targets: '.loader',
        duration: 200,
        easing: 'easeInOutQuart',
        opacity: 0,
        zIndex: -1,
      });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  }, []);

  // Hide page overflow while the loader is showing (was done via react-helmet)
  useEffect(() => {
    document.body.classList.add('hidden');
    return () => document.body.classList.remove('hidden');
  }, []);

  return (
    <StyledLoader className="loader" isMounted={isMounted}>
      <div className="logo-wrapper">
        <div className="text-div">
          <h1 className="name-text">Purit</h1> <h1 className="name-text">Hongjirakul</h1>
          <h2 className="portfolio-text">Portfolio</h2>
        </div>
      </div>
    </StyledLoader>
  );
};

Loader.propTypes = {
  finishLoading: PropTypes.func.isRequired,
};

export default Loader;
