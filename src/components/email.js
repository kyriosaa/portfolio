import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia, email } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 0px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Email = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <div>
      <StyledLinkWrapper>
        <a href={`mailto:${email}`}>{email}</a>
      </StyledLinkWrapper>
      <StyledSocialList>
        {socialMedia &&
          socialMedia.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocialList>
    </div>
  </Side>
);

Email.propTypes = {
  isHome: PropTypes.bool,
};

export default Email;
