import styled from 'styled-components';

export const Header = styled.header`
  background-color: #191919;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
`;

export const UlOption = styled.ul`
  width: 100%;
  list-style-type: none;
`;

export const LiOption = styled.li`
  color: white;
  width: 60px;
  height: 30px;
  cursor: pointer;
`;

export const ShowArchivesUl = styled.ul`
  padding: 0;
  width: 150px;
  height: 200px;
  background-color: #191919;
  list-style: none;
  position: relative;
  visibility: ${(props) => (props.view ? 'visible' : 'hidden')};
`;

export const ShowArchivesLi = styled.li`
  margin: 10px;
  font-size: 10px;
`;
