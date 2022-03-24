import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        border-left: 3px solid var(--primary-color);
        padding: 0px 10px;
        color: var(--primary-color);
    }
    div {
        width: 40%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .imagemlogo {
        border-radius: 8px;
        width: 100%;
        height: 100%;
    }
    div>h2 {
        color: var(--primary-color);;
        border-left: 3px solid var(--primary-color);
        padding: 0px 10px;
    }
    img {
        border: 3px solid transparent;
        width: 50%;
        height: 50%;
        opacity: 50%;
        border-radius: 50%;
    }
    .developers {
        margin-top: 20px;
        margin-bottom: 40px;
    }
    .linkstosocial {
        display: flex;
        flex-direction: row;
        gap: 0px;
        justify-content: center;
    }
    .developers-ul {
        text-align: center;
        font-size: 70%;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 10px;
    }
    .developers-ul>li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        color: black;
    }
    .developers-ul>li:hover {
        color: var(--primary-color);
    }
    .developers-ul img:hover {
        opacity: 100%;
        transition: all .5s;
        border-radius: 50%;
        border:3px solid var(--primary-color);
    }
    @media screen and (min-width: 768px) {
        transition: all .5s;
        .developers-ul {
            margin-top: 20px;
            flex-direction: row;
        }
    }


`