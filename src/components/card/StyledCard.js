import styled from "styled-components";
import trash from "../../assets/trash.png";

export const StyledCard = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--Grey-4);
  border-radius: 0.25rem;


  :hover {
    background-color: var(--Grey-3);
  }

  .statusAndButton{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    

  }

  .trashButton {
    background-image: url(${trash});
    background-color: var(--Grey-4);
    background-repeat:no-repeat;
    background-position:center;
    width: 1.25rem;
    height: 1.25rem;
    border: none;
    outline: none;
    border-radius: 0.25rem;
    margin-left: 1rem;
  }
`;
