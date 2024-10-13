"use client";
import styled from 'styled-components';

export const MainBase = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    width: 1075px;
    height: 125px;
`;

export const Content = styled.div`
    padding-left: 15px;
    font-size: 15px;
    color: #000;
`;

export const OriginalLogo = styled.img`
    height: 40px;
    padding-right: 15px;
`;

function Footer() {
    return (
        <footer>
            <MainBase>
                <Content>라이선스를 별도로 명시하지 않았을 경우, CC BY-NC-SA 라이선스(예시)에 따릅니다.<br/>자세한 정보는 OO에서 확인하세요.</Content>
                <OriginalLogo src={`/img/OriginalLogo.png`} alt="로고이미지" />
            </MainBase>
        </footer>
    );
}

export default Footer;