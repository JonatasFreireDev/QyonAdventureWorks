import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  & > div {
    width: 100%;
  }

  section{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0 50px;

    @media (max-width: 800px)
    {
      &{
        flex-direction: column;
      }
    }
  }
`;

export const Boz = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 128px;
  margin: 5px;
  border-radius: 10px;
  padding: 20px;
  margin: 0 50px;
  -webkit-box-shadow: 0px 4px 9px -1px rgba(0,0,0,0.46); 
  box-shadow: 0px 4px 9px -1px rgba(0,0,0,0.46);

  &:first-child{
    background: #1dfc4f;
    cursor: pointer;
  }

  @media (max-width: 800px)
    {
      &{
        margin-top: 50px;
      }
    }
`;