"use client";
import styled from 'styled-components';

export const Headerr = styled.div`
    position: fixed;
    top: 0;
    height: 70px;
    background-color: #0EB4FC;
`;

export const HeaderTle = styled.div`
    width: 100vw;
    height: 100%;
`;

export const HeaderLogo = styled.img`
    position: absolute;
    height: 20px;
    top: 50%;
    transform: translateY(-50%);

    &:hover {
        cursor: pointer;
    }
`;

export const MobileMenuBtn = styled.img`
    position: absolute;
    height: 30px;
    top: 50%;
    transform: translateY(-50%);
    display: none;

    @media (max-width: 768px) {
        display: inline-block;
        right: 0;
    }
`;

export const NavLeft = styled.nav`
    position: absolute;
    top: 50%;
    left: 13%;
    transform: translateY(-50%);
    transition: .1s all;
    color: white;

    @media (max-width: 768px) {
        left: 5%;
    }
`;

export const NavRight = styled.nav`
    position: absolute;
    top: 50%;
    right: 13%;
    transform: translateY(-50%);
    transition: .1s all;
    color: white;

    @media (max-width: 768px) {
        right: 5%;
    }
`;

export const UlLeft = styled.ul`
    padding-left: 130px;
    list-style: none;
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const UlRight = styled.ul`
    list-style: none;
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const LiLeft = styled.li`
    margin-right: 20px;
    text-align: center;
    transition: .25s all;

    &:hover {
        cursor: pointer;
        opacity: 50%;
    }
`;

export const LiRight = styled.li`
    text-align: center;
    margin-left: 20px;
    transition: .25s all;
    background-color: #fff;
    color: #0EB4FC;
    padding: 10px;
    width: 60px;
    font-size: 15px;
    border-radius: 30px;
    cursor: pointer;
    transition: .25s all;

    &:hover {
        transform: scale(105%);
        font-weight: 900;
    }
`;

export const Search = styled.input`
    margin-left: 20px;
    transition: .25s all;
    background-color: #fff;
    padding: 10px;
    width: 150px;
    font-size: 15px;
    border-radius: 30px;
    border: 0;
    transition: .25s all;
`;

function Header() {
    function noalert() {
        alert('열심히 만들고 있어요..! 잠시만 기다려 주세요!');
    }

    return (
        <header>
            <Headerr>
                <HeaderTle>
                    <NavLeft>
                        <HeaderLogo src={`/img/Logo.png`} alt="로고이미지" />
                        <UlLeft>
                            <LiLeft onClick={noalert}>최근 변경</LiLeft>
                        </UlLeft>
                    </NavLeft>
                    <NavRight>
                        {/* <MobileMenuBtn src={`/img/icons/menu_24dp_E8EAED_FILL0_wght400_GRAD0_opsz24.png`} alt="로고이미지" /> */}
                        <UlRight>
                            <form>
                                <Search
                                type='text'
                                name='search'
                                placeholder='🔍︎ 검색...'></Search>
                            </form>
                            <LiRight>로그인</LiRight>
                        </UlRight>
                    </NavRight>
                </HeaderTle>
            </Headerr>
        </header>
    );
};

export default Header;