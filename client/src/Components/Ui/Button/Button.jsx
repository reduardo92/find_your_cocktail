import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

const Styled = styled.button`
  color: ${props =>
    props.btnsecond ? 'var(--secondry--clr)' : 'var(--white--clr)'};
  text-transform: uppercase;
  text-decoration: none;
  background: ${props =>
    props.btnsecond ? 'var(--primary--clr)' : 'var(--secondry--clr)'};
  padding: ${props => props.btnpadding || '20px'};
  border-radius: 5px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  font-weight: bold;
  font-family: var(--primary--fn);
  letter-spacing: 1px;

  &:hover,
  &:focus {
    background: ${props =>
      props.btnsecond ? 'var(--secondry--clr)' : 'var(--primary--clr)'};
    letter-spacing: 1.2px;
    color: ${props =>
      props.btnsecond ? 'var(--white--clr)' : 'var(--secondry--clr)'};
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
`;

const Button = ({ title = 'Search', btnsecond, btnpadding }) => (
  <Styled
    type='submit'
    btnsecond={btnsecond}
    btnpadding={btnpadding}
    className='btnStyl'
  >
    {title}
  </Styled>
);

export default Button;

// const Styled = styled(Link)`
//   color: ${props =>
//     props.btnsecond ? 'var(--secondry--clr)' : 'var(--white--clr)'};
//   text-transform: uppercase;
//   text-decoration: none;
//   background: ${props =>
//     props.btnsecond ? 'var(--primary--clr)' : 'var(--secondry--clr)'};
//   padding: ${props => props.btnpadding || '20px'};
//   border-radius: 5px;
//   display: inline-block;
//   border: none;
//   transition: all 0.4s ease 0s;
//   font-weight: bold;
//   font-family: var(--primary--fn);
//   letter-spacing: 1px;

//   &:hover,
//   &:focus {
//     background: ${props =>
//       props.btnsecond ? 'var(--secondry--clr)' : 'var(--primary--clr)'};
//     letter-spacing: 1.2px;
//     color: ${props =>
//       props.btnsecond ? 'var(--white--clr)' : 'var(--secondry--clr)'};
//     box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
//     transition: all 0.4s ease 0s;
//   }
// `;

// const Button = ({ title = 'Search', btnsecond, btnpadding, pathTo }) => (
//   <Styled
//     to={pathTo}
//     btnsecond={btnsecond}
//     btnpadding={btnpadding}
//     className='btnStyl'
//   >
//     {title}
//   </Styled>
// );

// export default Button;
