"use client";
import styled from 'styled-components';

export const FooterTle = styled.div`
    width: 100%;
    height: 250px;
    background-color: #171717;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1356px) {
        height: 225px;
    }

    @media (max-width: 886px) {
        height: 200px;
    }
`;

export const SurList = styled.div`
    display: flex;
`;

export const Terms = styled.div`
    color: #505050;
    margin-left: 10%;
    margin-bottom: 30px;
`;

export const SurTitle = styled.div`
    color: #fff;
    font-size: 20px;
    font-weight: 900;
    margin-bottom: 10px;

    @media (max-width: 1356px) {
        font-size: 17px;
    }

    @media (max-width: 886px) {
        font-size: 14px;
    }
`;

export const SurContent = styled.a`
    color: #505050;
    font-size: 15px;
    line-height: 25px;
    transition: .1s all;

    &:hover {
        cursor: pointer;
        color: #707070;
    }

    @media (max-width: 1356px) {
        font-size: 14px;
    }

    @media (max-width: 886px) {
        font-size: 13px;
    }
`;

export const Company = styled.div`
    color: #505050;
    margin-left: 10%;
    font-weight: 500;
    font-size: 20px;
`;

export const Service = styled.div`
    color: #505050;
    margin-left: 5%;
    margin-bottom: 30px;
`;

export const Policy = styled.div`
    color: #505050;
    margin-left: 5%;
    margin-bottom: 30px;
`;

export const Copyright = styled.div`
    font-size: 15px;

    @media (max-width: 1356px) {
        font-size: 14px;
    }

    @media (max-width: 886px) {
        font-size: 13px;
    }
`;

function Footer() {
    return (
        <footer>
            <FooterTle>
                <SurList>
                    <Terms>
                    </Terms>
                    <Service>
                        <SurTitle>둘러보기</SurTitle>
                        <SurContent><div onClick={() => {window.location.href = 'https://naetawiki.kro.kr'}}>내타위키</div></SurContent>
                    </Service>
                    <Policy>
                        <SurTitle>정책</SurTitle>
                        <SurContent><div onClick={() => {window.location.href = 'https://www.netlify.com/privacy/'}}>Netlify 개인정보 보호정책</div></SurContent>
                        <SurContent><div onClick={() => {window.location.href = 'https://vercel.com/legal/privacy-policy'}}>Vercel 개인정보 정책</div></SurContent>
                    </Policy>
                </SurList>
                <Company>
                    <Copyright>Copyright 2024. Saeharae all rights reserved.</Copyright>
                </Company>
            </FooterTle>
        </footer>
    );
}

export default Footer;