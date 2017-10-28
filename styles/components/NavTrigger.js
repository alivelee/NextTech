import styled, { keyframes } from 'styled-components';
import { CardShadow } from '../theme';
const inM = keyframes`
50% {
  transform:rotate(0deg);
}
100% {
  transform:rotate(45deg);
}
`;

const outM = keyframes`
50%{transform:rotate(0deg);}
100%{transform:rotate(45deg);}
`;

const inT = keyframes`
0%{-webkit-transform: translateY(0px) rotate(0deg);}
50%{-webkit-transform: translateY(9px) rotate(0deg);}
100%{-webkit-transform: translateY(9px) rotate(135deg);}  
`;

const outT = keyframes`
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(9px) rotate(0deg);}
100%{transform: translateY(9px) rotate(135deg);}
`;

const inBtm = keyframes`
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
`;

const outBtm = keyframes`
0%{transform: translateY(0px) rotate(0deg);}
50%{transform: translateY(-9px) rotate(0deg);}
100%{transform: translateY(-9px) rotate(135deg);}
`;
const Card = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 1.3rem;
  margin: 0 0.05rem 0.05rem 0;
  box-shadow: ${CardShadow.basic};
  background: #F9F9F9;
  z-index: 1;
`;
const NavWrapper = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  i {
    background-color: #555555;
    border-radius: 2px;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
  }
  i:nth-child(1) {
    animation:outT 0.8s backwards;
    animation-direction:reverse;
  }
  i:nth-child(2) {
    margin: 0.1rem 0;
    animation:outM 0.8s backwards;
    animation-direction:reverse;
  }
  i:nth-child(3) {
    animation:outBtm 0.8s backwards;
    animation-direction:reverse;
  }
  &.active {
    i:nth-child(1) {
      animation:inT 0.8s forwards;
    }
    i:nth-child(2) {
      animation:inM 0.8s forwards;
    }
    i:nth-child(3) {
      animation:inBtm 0.8s forwards;
    }
  }
`;

const NavTrigger = (props) => {
  return (
    <Card>
      <NavWrapper>
        <i></i>
        <i></i>
        <i></i>
      </NavWrapper>
    </Card>
  )
}

export default NavTrigger;