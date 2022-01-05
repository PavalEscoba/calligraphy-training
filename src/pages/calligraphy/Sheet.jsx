import React from 'react';
import { Preview, print } from 'react-html2pdf';

const Sheet = () => {
  return (
    <div className='col-sm-12'>
      <Preview id={'jsx-template'}>
        <div className="sheet">
        <p className='app__title'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, nesciunt quia! Dolorum, tenetur eum ex soluta illum maxime vero quis accusantium quod maiores aperiam exercitationem ratione dicta necessitatibus quasi, facilis ad tempora? Ratione autem fugit repellat, perspiciatis, nostrum itaque explicabo cum quo, repellendus doloremque aperiam beatae natus nulla officiis! Obcaecati!
        </p>
        <p className='app__title'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, nesciunt quia! Dolorum, tenetur eum ex soluta illum maxime vero quis accusantium quod maiores aperiam exercitationem ratione dicta necessitatibus quasi, facilis ad tempora? Ratione autem fugit repellat, perspiciatis, nostrum itaque explicabo cum quo, repellendus doloremque aperiam beatae natus nulla officiis! Obcaecati!
        </p>
        <p className='app__title'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, nesciunt quia! Dolorum, tenetur eum ex soluta illum maxime vero quis accusantium quod maiores aperiam exercitationem ratione dicta necessitatibus quasi, facilis ad tempora? Ratione autem fugit repellat, perspiciatis, nostrum itaque explicabo cum quo, repellendus doloremque aperiam beatae natus nulla officiis! Obcaecati!
        </p>
        </div>
      </Preview>
    </div>
  );
};

export default Sheet;