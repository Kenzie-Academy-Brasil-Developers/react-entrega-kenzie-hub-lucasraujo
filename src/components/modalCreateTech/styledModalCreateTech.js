import styled from "styled-components";


export const StyledModalCreateTech = styled.div`


    
    width: 100vw;
    height: 100vh;
    background-color:rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    
    form{
        background-color: var(--Grey-4);

        min-width: 15.625rem;
        border-radius: 0.25rem;
       

    }
    .headerModal{
        display: flex;
        justify-content: space-between;
        background-color:var(--Grey-3);
        padding:1rem;
        border-radius: 0.25rem 0.25rem 0 0 ;

    }

    .inputs{

        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

    }

    .divInput{
        display: flex;
        flex-direction: column;

    }

    .XModal{
        background-color: transparent;
        border:none;
        outline: none;
        color: white;
    }

    .XModal:hover{
        font-weight: 700;

    }




`