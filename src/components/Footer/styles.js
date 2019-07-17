import styled from 'styled-components';

export const Info = styled.footer`
  width: 100%;
  height: 40px;
  margin: 20px 0;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: #333;

    a {
      color: #333;
      text-decoration: none;

      &:hover {
        color: #4a90e2;
      }
    }
  }
`;
