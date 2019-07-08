import styled, { keyframes, css } from 'styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#ff6b6b' : '#eee')};
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

// Configuring the animation for the loading icon
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #4a90e2;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  /* Creating the animation in the loading icon */
  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    padding: 15px 0;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;

      img {
        width: 36px;
        height: 36px;
        margin-right: 10px;
        border-radius: 50%;
        border: 2px solid #eee;
      }
    }

    /* Apply border on top except first element */
    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #4a90e2;
      text-decoration: none;
    }
  }
`;
