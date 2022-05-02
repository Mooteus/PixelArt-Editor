import styled from 'styled-components';

export const Header = styled.header`
  background-color: #191919;
  width: 100%;
  height: 15px;
  display: flex;
`;

export const UlOption = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
`;

export const LiOption = styled.li`
  margin-top: 1px;
  margin-left: 1em;
  height: 10px;
  width: 30px;
  color: white;
  font-size: 8px;
  cursor: pointer;
`;

export const ShowArchivesUl = styled.ul`
  right: 10px;
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100px;
  height: 100px;
  background-color: #191919;
  list-style: none;
  position: relative;
  visibility: ${(props) => (props.view ? 'visible' : 'hidden')};
`;

export const ShowArchivesLi = styled.li`
  margin: 10px;
  font-size: 10px;
`;
