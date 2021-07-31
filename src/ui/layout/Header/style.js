import styled from 'styled-components';

export const StyledHeader = styled.header`
  display:flex;
  align-items: center;
  height: 60px;
  padding: 0 16px;
  box-shadow: 0 0.3px 0.3px rgb(0 0 0 / 2%), 0 0.9px 0.9px rgb(0 0 0 / 3%), 0 1.8px 1.8px rgb(0 0 0 / 4%), 0 3.7px 3.7px rgb(0 0 0 / 5%), 0 10px 10px rgb(0 0 0 / 7%)
`;

export const Nav = styled.nav`
  display:flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderCart = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

export const Bullet = styled.span`
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: -5px;
  right: -8px;
  background: #46bc8f;
  border-radius: 100%;
  font-size: 13px;
  line-height: 12px;
  width: 14px;
  height: 14px;
  color: #fff;
  text-align: center;
  line-height: 16px;
  width: 18px;
  height: 18px;
`;