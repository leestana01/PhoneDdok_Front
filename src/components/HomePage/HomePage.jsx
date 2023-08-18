import React from "react";
import CharacterPhotoImage from "../../assets/images/HomePage_CharacterPhoto.png";

import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handed_identity = location.state.identity;

  const onClick_btn = () => {
    navigate("/Category", {
      state: {
        dentity: handed_identity,
      },
    });
  };

  /*import BackIcon from "../../assets/images/back_icon.png";

import BottomMenuBar from "../../assets/images/HomePageBottomMenuBar.png";*/

  const HomePage1 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    width: `390px`,
    height: `844px`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    overflow: `hidden`,
  });

  const Rectangle10 = styled("div")({
    backgroundColor: `rgba(248, 248, 250, 1)`,
    width: `391px`,
    height: `688px`,
    position: `absolute`,
    left: `-1px`,
    top: `89px`,
  });

  /*const Line1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `390px`,
  height: `0px`,
  left: `0px`,
  top: `91px`,
});

const Line11 = styled("div")({
  border: `0.5px solid rgba(210, 214, 219, 1)`,
  width: `390px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});*/

  /*const Search1 = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `180.25px`,
  height: `18px`,
  left: `43px`,
  top: `56px`,
});*/

  const Q = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(177, 184, 192, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `15px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    position: `absolute`,
    left: `1px`,
    top: `0px`,
  });

  const Line4 = styled("div")({
    border: `1.5px solid rgba(72, 128, 238, 1)`,
    width: `15.02px`,
    height: `0px`,
    position: `absolute`,
    left: `8px`,
    top: `9px`,
  });

  /*const BackIcon1 = styled(BackIcon)({
  width: `22px`,
  height: `22px`,
  position: `absolute`,
  left: `11px`,
  top: `55px`,
});

const BottomMenuBar1 = styled(BottomMenuBar)({
  width: `390px`,
  height: `67px`,
  position: `absolute`,
  left: `0px`,
  top: `777px`,
});*/

  const Logo = styled("div")({
    backgroundColor: `rgba(217, 217, 217, 1)`,
    width: `318px`,
    height: `339px`,
    position: `absolute`,
    left: `33px`,
    top: `147px`,
  });

  const CharacterPhoto = styled("img")({
    height: `100px`,
    width: `90px`,
    position: `absolute`,
    left: `38px`,
    top: `592px`,
  });

  const SpeechBubble = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `205px`,
    height: `186px`,
    left: `158px`,
    top: `553px`,
  });

  const Rectangle24 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `205px`,
    height: `186px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q1 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Inter`,
    fontWeight: `400`,
    fontSize: `14px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    width: `185px`,
    height: `164px`,
    position: `absolute`,
    left: `9px`,
    top: `12px`,
  });

  function HomePage() {
    return (
      <HomePage1>
        <Rectangle10></Rectangle10>
        <Q>{`원하는 기능을 검색해보세요!`}</Q>
        <Logo></Logo>
        <CharacterPhoto
          src={CharacterPhotoImage}
          loading="lazy"
          alt={"CharacterPhoto"}
        />
        <SpeechBubble>
          <Rectangle24></Rectangle24>
          <Q1>{`캐릭터 말 입력`}</Q1>
        </SpeechBubble>
      </HomePage1>
    );
  }
};
export default HomePage;
