import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    top: -65px;
    z-index: 1;
    width: 100vw;
    height: 350px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    @keyframes on-menu {
        100% {
            opacity: 100%;
        }
        0% {
            opacity: 0%;
        }
    }
    animation: on-menu 1s;

    .search-container {
        margin: 25px;
        display: flex;
        align-items: center;
        gap: 15px;
    }
    .search-icon {
        width: 25px;
        height: 25px;
    }
    .search-input {
        font-size: 18px;
        background-color: transparent;
        border: none;
        outline: none;
    }
    .profile-container {
        display: flex;
        margin: 0px 19px;
        margin-bottom: 20px;
        gap: 8px;
    }
    .profile-line {
        width: 100%;
        height: 2px;
        background-color: #CCCCCC;
    }
    .profile-icon {
        width: 40px;
        height: 40px;
    }
    .profile-links {
        display: flex;
        flex-direction: column;
        text-align: start;
    }
    .profile-link-login {
        text-decoration: none;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
        color: black;
    }
    .profile-link-register {
        text-decoration: none;
        color: black;
    }
    .acces-pages-links {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 61%;
    }
    .ul-container {
        transition: all .5s;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 20px;
    }
    .list-item {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
    .list-item-link {
        font-size: 16px;
        font-family: 'Inter', sans-serif;
        font-weight: 700;
    }

    @media screen and (min-width: 460px) {
        display: none;
    }
`