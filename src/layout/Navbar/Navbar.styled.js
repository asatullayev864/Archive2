import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    padding: 12px;

    .mobile-content {
        display: none;
    }

    @media screen and (max-width: 900px) {
        .mobile-content {
            display: block;
        }

        .desktop-content {
            display: none;
        }
    }

    .mobile-opening-content {
        display: none;
    }

    .mobile-opening-content.visible {
        display: block;
    }
    
    .mobile-top {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        justify-content: space-between;
    }

    .mobile-top img {
        margin-left: 12px;
    }

    .burger {
        background: none;
        border: none;
        padding: 4px;
    }

    .burger img {
        width: 25px;
        height: 25px;
        display: block;
    }

    .mobile-icons {
    display: flex;
    gap: 14px;
    justify-self: end;
    }

    .mobile-search {
        position: relative;
        margin-top: 12px;
    }

    .mobile-search input {
        width: 100%;
        height: 44px;
        border-radius: 100px;
        padding: 0 40px 0 16px;
        border: 1px solid #ddd;
    }

    .mobile-search svg {
        position: absolute;
        right: 14px;
        top: 10px;
    }

    .mobile-menu {
        position: fixed;
        top: 0;
        left: -100%;
        width: 80%;
        height: 100vh;
        background: white;
        padding: 20px;
        transition: 0.3s;
        z-index: 100;
    }

    .mobile-menu.open {
        left: 0;
    }

    .close {
        background: none;
        border: none;
        font-size: 20px;
        margin-bottom: 20px;
    }

    .overlay {
        position: fixed;
        inset: 0;
        background: rgba(0,0,0,0.4);
        z-index: 50;
    }

    .mobile-links {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
}

.mobile-links a {
    font-size: 16px;
    font-weight: 600;
    color: #333;
    text-decoration: none;
}

.catalog-btn {
    width: 100%;
    height: 44px;
    border-radius: 100px;
    background: #2b2b2b;
    color: white;
    border: none;
    margin-bottom: 24px;
}

.mobile-phone {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.mobile-phone a {
    font-weight: 600;
    text-decoration: none;
    color: #000;
}

.mobile-phone button {
    background: none;
    border: none;
    color: #666;
    padding: 0;
}

.hide-mobile {
    display: none;
}

`;
