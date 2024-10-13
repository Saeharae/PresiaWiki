"use client";
import Docu_Compo from "../DocumentComponent/component";
import ReCh_Compo from "../SideComponent/RecentChangesComponent";
import Footer from "../footer/footer";
import styled from "styled-components";

export const MainBase = styled.div`
    display: flex;
    justify-content: center;
    padding: -100px;
    gap: 30px;
    margin-top: 100px;
    margin-bottom: 30px;
`;

export const FooterBase = styled.div`
    display: flex;
    justify-content: center;
    padding: -100px;
    gap: 30px;
    margin-bottom: 30px;
`;

export const FakeSpace = styled.div`
    width: 329px;
`;

function Main() {
    return (
        <main>
            <MainBase>
                <Docu_Compo />
                <ReCh_Compo />
            </MainBase>
            <FooterBase>
                <Footer />
                <FakeSpace />
            </FooterBase>
        </main>
    );
}

export default Main;
