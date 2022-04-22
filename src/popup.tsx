import React, { FC } from 'react';
import { render } from 'react-dom';

import './styles/styles.scss';

export const Popup: FC<any> = () => {
  return (
    <div className="flex items-center gap-4">
      <img src="images/icons/icon-48.png" alt="Google Favicons Icon" />
      <div className="flex flex-col justify-center gap-4">
        <div className="font-xl whitespace-nowrap font-bold text-gray-500">
          Google Favicons
        </div>
        <div className="font-sm whitespace-nowrap text-gray-800">
          Made by{' '}
          <a href="https://twitter.com/apinix" target="_blank">
            @aPinix
          </a>
        </div>
      </div>
    </div>
  );
};

render(<Popup />, document.getElementById('root'));
