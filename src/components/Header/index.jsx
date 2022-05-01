import React, { useState } from 'react';

import * as Style from './Header.styled';

export default function Header() {
  const [drop, setDrop] = useState(false);

  return (
    <Style.Header>
      <Style.UlOption>
        <Style.LiOption id="archiveDrop" onClick={() => setDrop(!drop)}>
          Arquivo
          <Style.ShowArchivesUl view={drop}>
            <Style.ShowArchivesLi>Novo Arquivo</Style.ShowArchivesLi>
            <Style.ShowArchivesLi>lorem ipsum</Style.ShowArchivesLi>
            <Style.ShowArchivesLi>lorem ipsum</Style.ShowArchivesLi>
          </Style.ShowArchivesUl>
        </Style.LiOption>
      </Style.UlOption>
    </Style.Header>
  );
}
