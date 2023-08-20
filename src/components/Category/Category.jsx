import React, { useState } from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import Rectangle248Image from "../../assets/images/Category_Rectangle_24.png";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import HomeIconImg from "../../assets/images/HomeIcon.png";

import CategoryIconImg from "../../assets/images/CategoryIcon.png";

import MypageIconImg from "../../assets/images/MypageIcon.png";

import { styled } from "@mui/material/styles";

import "../../App.css";

const Category1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `390px`,
  height: `1590px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const BackgroundColorGray = styled("div")({
  backgroundColor: `rgba(248, 248, 250, 1)`,
  width: `391px`,
  height: `1502px`,
  position: `absolute`,
  left: `0px`,
  top: `88px`,
});

/*const Line3 = styled("div")({
  border: `0.5px solid rgba(210, 214, 219, 1)`,
  width: `390px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `91px`,
});*/

/*const BackIcon1 = styled(BackIcon)({
  width: `22px`,
  height: `22px`,
  position: `absolute`,
  left: `11px`,
  top: `55px`,
});*/

/*const Search1 = styled(Search)({
  width: `180.25px`,
  height: `18px`,
  position: `absolute`,
  left: `43px`,
  top: `56px`,
});*/


  const Q = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `128px`,
    left: `41px`,
    top: `1253px`,
  });

  const ShortCut = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `71px`,
  });

  const Rectangle24 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
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
    position: `absolute`,
    left: `25px`,
    top: `20px`,
  });

  const SamSungPay = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `0px`,
  });

  const Rectangle241 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q2 = styled("div")({
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
    position: `absolute`,
    left: `25px`,
    top: `20px`,
  });

  const Q3 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `412px`,
    left: `41px`,
    top: `770px`,
  });

  const Wifi = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `355px`,
  });

  const Rectangle242 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q4 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const Wallpaper = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `284px`,
  });

  const Rectangle243 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q5 = styled("div")({
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
    position: `absolute`,
    left: `25px`,
    top: `20px`,
  });

  const KakaoTalk = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `213px`,
  });

  const Rectangle244 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q6 = styled("div")({
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
    position: `absolute`,
    left: `25px`,
    top: `20px`,
  });

  const PhoneBook = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `142px`,
  });

  const Rectangle245 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q7 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const MemoApp = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `71px`,
  });

  const Rectangle246 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q8 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const AppInstallDelete = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `0px`,
  });

  const Rectangle247 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q9 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const Q10 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `554px`,
    left: `41px`,
    top: `145px`,
  });

  const SoundVibration = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `0px`,
  });

  const Rectangle248 = styled("img")({
    height: `57px`,
    width: `307px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q11 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const TimerAlarm = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `71px`,
  });

  const Rectangle249 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q12 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const Brightness = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `142px`,
  });

  const Rectangle2410 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q13 = styled("div")({
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
    position: `absolute`,
    left: `25px`,
    top: `20px`,
  });

  const Keyboard = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `213px`,
  });

  const Rectangle2411 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q14 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const Capture = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `284px`,
  });

  const Rectangle2412 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q15 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const PhoneOnOff = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `355px`,
  });

  const Rectangle2413 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q16 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  const VideoCall = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `426px`,
  });

  const Rectangle2414 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q17 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 28px;
    top: 20px;
  `;

  const SpeakerPhone = styled("div")({
    boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `307px`,
    height: `57px`,
    left: `0px`,
    top: `497px`,
  });

  const Rectangle2415 = styled("div")({
    backgroundColor: `rgba(255, 255, 255, 1)`,
    border: `1px solid rgba(0, 0, 0, 1)`,
    boxSizing: `border-box`,
    borderRadius: `13px`,
    width: `307px`,
    height: `57px`,
    position: `absolute`,
    left: `0px`,
    top: `0px`,
  });

  const Q18 = styled(Link)`
    text-align: left;
    white-space: pre-wrap;
    font-synthesis: none;
    color: rgba(0, 0, 0, 1);
    font-style: normal;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0px;
    text-decoration: none;
    text-transform: none;
    position: absolute;
    left: 25px;
    top: 20px;
  `;

  /*const RedCheckGroup = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `88px`,
  height: `20px`,
  left: `44px`,
  top: `1219px`,
});*/

  const Frame9 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    left: `29px`,
    top: `0px`,
    height: `19px`,
    width: `59px`,
  });

  const Q19 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Product Sans`,
    fontWeight: `400`,
    fontSize: `16px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    margin: `0px`,
  });

  /*const IconCheckOne = styled(IconCheckOneImage)({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});*/

  /*const GreenCheckGroup = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `89px`,
  height: `20px`,
  left: `41px`,
  top: `736px`,
});*/

  const Frame8 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    left: `30px`,
    top: `1px`,
    height: `19px`,
    width: `59px`,
  });

  const Q20 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Product Sans`,
    fontWeight: `400`,
    fontSize: `16px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    margin: `0px`,
  });

  /*const IconCheckOne1 = styled(IconCheckOne1Image)({
  height: `20px`,
  width: `20px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});

const BlueCheckGroup = styled("div")({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `93px`,
  height: `20px`,
  left: `39px`,
  top: `111px`,
});

const IconCheckOne2 = styled(IconCheckOne2Image)({
  height: `20px`,
  width: `22.67px`,
  position: `absolute`,
  left: `0px`,
  top: `0px`,
});*/

  const Q21 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `59px`,
    height: `19px`,
    left: `34px`,
    top: `1px`,
  });

  const Frame5 = styled("div")({
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `center`,
    padding: `0px`,
    boxSizing: `border-box`,
    left: `0px`,
    top: `0px`,
    height: `19px`,
    width: `59px`,
  });

  const Q22 = styled("div")({
    textAlign: `left`,
    whiteSpace: `pre-wrap`,
    fontSynthesis: `none`,
    color: `rgba(0, 0, 0, 1)`,
    fontStyle: `normal`,
    fontFamily: `Product Sans`,
    fontWeight: `400`,
    fontSize: `16px`,
    letterSpacing: `0px`,
    textDecoration: `none`,
    textTransform: `none`,
    margin: `0px`,
  });

const BottomMenuBar = styled("div")({
  display: `flex`,
  position: `fixed`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: 'space-between',
  backgroundColor: '#e0b88a',
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `390px`,
  height: `67px`,
  left: `4px`,
  bottom: `0px`
});

const HomeIcon = styled("img")({
  height: `30px`,
  width: `30px`,
});

const CategoryIcon = styled("img")({
  height: `30px`,
  width: `30px`,
});

/*const CorrectionGrey = styled("img")({
  height: `30px`,
  width: `30px`,
});*/

const MypageIcon = styled("img")({
  height: `30px`,
  width: `30px`,
});

function Category() {
  return (
    <Category1>
      <BackgroundColorGray>
        <Q>
          <ShortCut>
            <Rectangle24>
              <Q1>{`단축키 전화걸기`}</Q1>
            </Rectangle24>
          </ShortCut>
          <SamSungPay>
            <Rectangle241>
              <Q2>{`삼성페이 활용하기`}</Q2>
            </Rectangle241>
          </SamSungPay>
        </Q>
        <Q3>
          <Wifi>
            <Rectangle242>
              <Q4 to="/Wifi">{`와이파이 연결하기`}</Q4>
            </Rectangle242>
          </Wifi>
          <Wallpaper>
            <Rectangle243>
              <Q5>{`배경화면 바꾸기`}</Q5>
            </Rectangle243>
          </Wallpaper>
          <KakaoTalk>
            <Rectangle244>
              <Q6>{`카카오톡 활용하기`}</Q6>
            </Rectangle244>
          </KakaoTalk>
          <PhoneBook>
            <Rectangle245>
              <Q7 to="/AddPhoneNumberA">{`연락처 추가 및 삭제하기`}</Q7>
            </Rectangle245>
          </PhoneBook>
          <MemoApp>
            <Rectangle246>
              <Q8 to="/Memo">{`메모장 활용하기`}</Q8>
            </Rectangle246>
          </MemoApp>
          <AppInstallDelete>
            <Rectangle247>
              <Q9 to="/DownApp">{`앱 설치 및 삭제하기`}</Q9>
            </Rectangle247>
          </AppInstallDelete>
        </Q3>
        <Q10>
          <SoundVibration>
            <Rectangle248
              src={Rectangle248Image}
              loading="lazy"
              alt={"Rectangle 24"}
            />
            <Q11 to="/Mute">{`소리 및 무음 설정하기`}</Q11>
          </SoundVibration>
          <TimerAlarm>
            <Rectangle249
              src={Rectangle248Image}
              loading="lazy"
              alt={"Rectangle 24"}
            />
            <Q12 to="/Timer">{`타이머 및 알람 설정하기`}</Q12>
          </TimerAlarm>
          <Brightness>
            <Rectangle2410>
              <Q13>{`휴대폰 밝기 설정하기`}</Q13>
            </Rectangle2410>
          </Brightness>
          <Keyboard>
            <Rectangle2411>
              <Q14 to="/Keyboard">{`키보드 활용하기`}</Q14>
            </Rectangle2411>
          </Keyboard>
          <Capture>
            <Rectangle2412>
              <Q15 to="/Screenshot">{`화면 캡쳐하기기`}</Q15>
            </Rectangle2412>
          </Capture>
          <PhoneOnOff>
            <Rectangle2413>
              <Q16 to="/OnOff">{`휴대폰 켜고 끄기`}</Q16>
            </Rectangle2413>
          </PhoneOnOff>
          <VideoCall>
            <Rectangle2414>
              <Q17 to="/FaceTime">{`영상통화 걸기`}</Q17>
            </Rectangle2414>
          </VideoCall>
          <SpeakerPhone>
            <Rectangle2415>
              <Q18 to="/SpeakerPhone">{`스피커폰으로 통화하기`}</Q18>
            </Rectangle2415>
          </SpeakerPhone>
        </Q10>
        <Frame9>
          <Q19>{`고급기능`}</Q19>
        </Frame9>
        <Frame8>
          <Q20>{`중급기능`}</Q20>
        </Frame8>
        <Q21>
          <Frame5>
            <Q22>{`초급기능`}</Q22>
          </Frame5>
        </Q21>
        <NavigationBar />
      </BackgroundColorGray>
    </Category1>
  );
}
function NavigationBar() {
  return (
    <div className="navi_bar">
      <div>
        <button className="menuBtn" type="button">
          <img
            src="img/home.png"
            alt="homeNoneSelect"
            style={{ display: "none" }}
          />
          <img src="img/home1.png" alt="homeSelect" />
        </button>
      </div>
      <div>
        <button className="menuBtn" type="button">
          <img src="img/menu.png" alt="menuNoneSelect" />
          <img
            src="img/menu1.png"
            alt="menuSelect"
            style={{ display: "none" }}
          />
        </button>
      </div>
      <div>
        <button className="menuBtn" type="button">
          <img src="img/check.png" alt="checkNoneSelct" />
          <img
            src="img/check1.png"
            alt="checkSelct"
            style={{ display: "none" }}
          />
        </button>
      </div>
      <div>
        <button className="menuBtn" type="button">
          <img src="img/user.png" alt="userNoneSelect" />
          <img
            src="img/user1.png"
            alt="userSelect"
            style={{ display: "none" }}
          />
        </button>
      </div>
    </div>
  );
}

export default Category;
