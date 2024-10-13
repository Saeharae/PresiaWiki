"use client";
import Docu_Compo from "../DocumentComponent/component";
import ReCh_Compo from "../SideComponent/RecentChangesComponent";
import styled from "styled-components";

export const MainBase = styled.div`
    display: flex;
    justify-content: center;
    padding: -100px;
    gap: 30px;
`;

function Main() {
  return (
    <MainBase>
      <Docu_Compo />
      <ReCh_Compo />
    </MainBase>
  );
}

export default Main;
