import React from "react";

import { styled } from "@mui/material/styles";

import BackIcon from "../../assets/images/back_icon.png";

import Search from "../../assets/images/search.png";

import rabbit from "../../assets/images/Character2.png";

import bluecharacter from "../../assets/images/Character1.png";

const CharacterChange1 = styled("div")({
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

const Line3 = styled("div")({
  border: `0.5px solid rgba(210, 214, 219, 1)`,
  width: `390px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `91px`,
});

const Q = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(26, 30, 39, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `46px`,
  top: `143px`,
});

const SaveButton = styled("div")({
  backgroundColor: `rgba(31, 78, 245, 1)`,
  borderRadius: `12px`,
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `339px`,
  height: `60px`,
  left: `25px`,
  top: `702px`,
  overflow: `hidden`,
});

const Q1 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(255, 255, 255, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `400`,
  fontSize: `18px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `153px`,
  top: `19px`,
});

const BackIcon1 = styled(BackIcon)({
  width: `22px`,
  height: `22px`,
  position: `absolute`,
  left: `11px`,
  top: `55px`,
});

const Search1 = styled(Search)({
  width: `180.25px`,
  height: `18px`,
  position: `absolute`,
  left: `43px`,
  top: `56px`,
});

const Character6 = styled(rabbit)({
  width: `121px`,
  height: `121px`,
  position: `absolute`,
  left: `213px`,
  top: `519px`,
});

const Character5 = styled(rabbit)({
  width: `121px`,
  height: `121px`,
  position: `absolute`,
  left: `47px`,
  top: `519px`,
});

const Character4 = styled(rabbit)({
  width: `121px`,
  height: `121px`,
  position: `absolute`,
  left: `213px`,
  top: `361px`,
});

const Character3 = styled(rabbit)({
  width: `121px`,
  height: `121px`,
  position: `absolute`,
  left: `47px`,
  top: `361px`,
});

const Character2 = styled(rabbit)({
  width: `121px`,
  height: `121px`,
  position: `absolute`,
  left: `213px`,
  top: `214px`,
});

const Character1 = styled(rabbit)({
  width: `96px`,
  height: `108px`,
  position: `absolute`,
  left: `59px`,
  top: `214px`,
});

function CharacterChange() {
  return (
    <CharacterChange1>
      <Line3></Line3>
      <Q>{`변경할 캐릭터를 선택해주세요`}</Q>
      <SaveButton>
        <Q1>{`저장`}</Q1>
      </SaveButton>
      <BackIcon1 />
      <Search1 />
      <Character6 />
      <Character5 />
      <Character4 />
      <Character3 />
      <Character2 />
      <Character1 />
    </CharacterChange1>
  );
}

export default CharacterChange;
