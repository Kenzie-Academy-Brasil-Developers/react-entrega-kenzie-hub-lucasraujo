import styled from "styled-components";
import add from "../../assets/add.png"

export const StyledContentHome = styled.section`

    .HeraderContent{
        display: flex;
        justify-content: space-between;
        align-items: center;

    

    }

    .buttonAdd{
        width: 1.25rem;
        height: 1.25rem;
       
        background-image: url(${add}) ;

        background-position:center;
        background-repeat:no-repeat;
        background-color:var(--Grey-3);
        outline: none;
        border:none;
        border-radius:0.25rem;
    }
    .buttonAdd:hover{
        background-color:var(--Grey-2);
    }

    .Cards{
        display: flex;
        flex-direction: column;
        margin-top: 0.5rem;
        padding: 1.25rem;
        background-color:var(--Grey-2);
        border-radius:0.25rem;
        gap: 1rem;
    }

`