import styled from 'styled-components';

export const Container = styled.div`
   position: fixed;
   background: ${(props) => props.theme.theme.mainTheme};
   left: 0px;
   top: 0px;
   width: 80px;
   height: 100vh;
   padding: 10px;
   color: white;
   right: 20px;
`;

export const Content = styled.aside`
   display: flex;
   flex-direction: column;
   height: 100%;
   width: 100%;
   justify-content: space-between;
   align-items: center;

   div {
      display: flex;
      align-items: flex-end;
      justify-content: end;
      flex-direction: column;
      height: 100%;

      svg {
         margin-bottom: 15px;
         cursor: pointer;
         color: ${props => props.theme.icon.white};
         transition: all 0.3s;

         &:hover{
            filter: brightness(0.55);
         }
      }

      button {
         background: transparent;
         padding: 0px;
         margin: 0px;
      }
   }
`;

export const Logo = styled.div`
   margin-bottom: 10px;
   
   img {
      width: 100%;
   }
`;