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
  cursor: pointer;
`;

export const ShowArchives = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
  visibility: ${(props) => (props.view ? 'visible' : 'hidden')};
`;
