import React from 'react';

import * as Style from './Header.styled';

export default function Header() {
  // const dropDown = ({ target }) => {
  // };

  return (
    <>
      <Style.Header>
        <Style.UlOption>
          <Style.LiOption id="archiveDrop">Arquivo</Style.LiOption>
        </Style.UlOption>
      </Style.Header>
      <Style.ShowArchives />
    </>
  );
}
