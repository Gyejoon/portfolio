import { bool } from 'prop-types';
import React from 'react';
import { ProfileType } from '../../types';
import { FaGithub } from 'react-icons/fa';

const Footer = ({ name, showThemeLogo = true }) => (
  <footer className="bg-front mt-16 pt-8 pb-16">
    <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex items-center">
      <div className="w-2/3 text-back-light font-header text-xs">
        <b>
          &copy; {new Date().getFullYear()} {name}.
        </b>{' '}
        All rights reserved.
      </div>
      <div className="w-1/3 text-right">
        {showThemeLogo && (
          <a
            aria-label="Source Code"
            className="text-back-light"
            href="https://github.com/Gyejoon/portfolio"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaGithub className="fill-current inline-block" />
          </a>
        )}
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  name: ProfileType.name,
  showThemeLogo: bool,
};

export default Footer;
