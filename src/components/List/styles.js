import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

export const Header = styled.header`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 64px;
`;

export const Name = styled.strong`
  font-size: 24px;
  margin-top: 10px;
`;

export const Company = styled.small`
  font-size: 14px;
  color: #666;
`;

export const ListItem = styled.ul`
  list-style: none;
`;

export const Item = styled.li`
  font-weight: bold;
  padding: 12px 20px;

  &:nth-child(2n - 1) {
    background: #f5f5f5;
  }
`;

export const Description = styled.small`
  font-weight: normal;
  font-size: 12px;
  color: #999;
  font-style: italic;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Update = styled.button`
  height: 30px;
  margin-left: 10px;
  background: #9b65e6;
  color: #fff;
  border: 0;
  font-size: 12;
  font-weight: bold;
  border-radius: 3px;
  width: 110px;

  &:hover {
    background: #723ebb;
  }
`;

export const Delete = styled.button`
  height: 30px;
  margin-left: 10px;
  background: #f00;
  color: #fff;
  border: 0;
  font-size: 12;
  font-weight: bold;
  border-radius: 3px;
  width: 110px;

  &:hover {
    background: #b30f0f;
  }
`;
