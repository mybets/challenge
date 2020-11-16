import styled from 'styled-components';
import backgroundImage from '../../assets/bg-shapes.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;

  box-shadow: 0px 275px 559px rgba(149, 149, 149, 0.388672);
  border-radius: 24px;

  margin-left: 82px;
  margin-right: 82px;
`;

export const ContainerLeft = styled.div`
  flex: 1;
  background: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 0 0 24px 24px;
`;

export const ContainerRight = styled.div`
  flex: 1;
  background: #ed7936 url(${backgroundImage}) no-repeat center;
  background-size: cover;
  border: 1px solid #ffffff;
  border-radius: 0 24px 24px 0;
`;

export const HeaderLeft = styled.div`
  width: 200px;
  height: 70.14px;
  margin-left: 149px;
  margin-top: 29px;
`;

export const ContentLeft = styled.div`
  margin-top: 120px;
  margin-left: 50px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;

  strong {
    width: 421px;
    height: 96px;
    font-family: Raleway;
    font-style: normal;
    font-weight: 900;
    font-size: 38.4px;
    line-height: 48px;
    letter-spacing: -0.5184px;
    color: #525256;
    flex: 1;

    .green {
      color: #1ca78b;
      text-decoration-line: underline;
    }
  }

  p {
    width: 455px;
    height: 160px;
    left: 311px;
    top: 472px;

    font-family: Raleway;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 40px;

    color: #3e4b5b;
    flex: 1;
  }
`;

export const ButtonCreateCount = styled.button`
  width: 336px;
  height: 86px;

  background: #ed6e2d;
  box-shadow: 0px 30px 38px rgba(0, 0, 0, 0.03);
  border-radius: 15px;

  font-family: Raleway;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 48px;

  color: #ffffff;
`;

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 29px;
  margin-right: 55px;
`;

export const ButtonGroup = styled.div`
  width: 275px;
  height: 70.14px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonLogin = styled.button`
  width: 116.4px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background: #ed6e2d;
  color: #ffffff;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonRegister = styled.button`
  width: 138px;
  height: 40px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background: #ed6e2d;
  color: #ffffff;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ContentRight = styled.div`
  margin-top: 170px;
  margin-left: 270px;
  height: 490px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    li.white {
      background: #ffffff;
      opacity: 1;
      width: 320px;
      height: 220px;

      div.line {
        height: 100px;
        border-right: 1px solid #ed6e2d;
        padding-left: 20px;
      }

      p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15.12px;
        line-height: 21px;

        color: #000000;

        padding-left: 20px;
      }
    }

    li {
      padding: 0 45px;
      display: flex;
      align-items: center;
      justify-content: center;

      background: #ed6e2d;

      border-radius: 15px;
      opacity: 0.6;
      width: 310px;
      height: 210px;

      div.line {
        height: 100px;
        border-right: 1px solid #ffffff;
        padding-left: 20px;
      }

      p {
        font-family: Open Sans;
        font-style: normal;
        font-weight: normal;
        font-size: 15.12px;
        line-height: 21px;

        color: #ffffff;

        padding-left: 20px;
      }
    }
  }
`;
