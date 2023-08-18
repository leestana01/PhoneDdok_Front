import React from "react";

import Q1Image from "../../assets/images/CharacterFrameMyPage.png";

import CharacterPhotoImage from "../../assets/images/MyPage_CharacterPhoto.png";

import { styled } from "@mui/material/styles";

import HomeIconImg from "../../assets/images/HomeIcon.png";

import CategoryIconImg from "../../assets/images/CategoryIcon.png";

import MypageIconImg from "../../assets/images/MypageIcon.png";

import "../../App.css";

const MyPage1 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: `390px`,
  height: `1225px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
});

const Level151Span1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Level151Span2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(50, 129, 246, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Level151Span3 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `400`,
  fontSize: `15px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Level151 = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `400`,
  fontSize: `nullpx`,
  letterSpacing: `NaNpx`,
  textDecoration: `none`,
  textTransform: `none`,
  position: `absolute`,
  left: `214px`,
  top: `173px`,
});

const QSpan1 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `700`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const QSpan2 = styled("span")({
  whiteSpace: `pre-wrap`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: `Product Sans`,
  fontWeight: `400`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
});

const Q = styled("div")({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: `rgba(0, 0, 0, 1)`,
  fontStyle: `normal`,
  fontFamily: "unset",
  fontWeight: `400`,
  fontSize: `22px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  width: `88px`,
  position: `absolute`,
  left: `214px`,
  top: `137px`,
});

const Line3 = styled("div")({
  border: `0.5px solid rgba(210, 214, 219, 1)`,
  width: `390px`,
  height: `0px`,
  position: `absolute`,
  left: `0px`,
  top: `91px`,
});

const Rectangle27 = styled("div")({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  width: `390px`,
  height: `494px`,
  position: `absolute`,
  left: `0px`,
  top: `283px`,
});

const Q1 = styled("img")({
  height: `143px`,
  width: `145px`,
  position: `absolute`,
  left: `37px`,
  top: `118px`,
});

const CharacterPhoto = styled("img")({
  height: `100px`,
  width: `90px`,
  position: `absolute`,
  left: `65px`,
  top: `137px`,
});

/*const BackIcon1 = styled(BackIcon)({
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

const BottomMenuBar1 = styled(BottomMenuBar)({
  width: `390px`,
  height: `67px`,
  position: `absolute`,
  left: `0px`,
  top: `1158px`,
});*/

const RecentStudy5 = styled("div")({
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
  left: `42px`,
  top: `1077px`,
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

const RecentStudy4 = styled("div")({
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
  left: `42px`,
  top: `1006px`,
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

const Q4 = styled("div")({
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

const RecentStudy3 = styled("div")({
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
  left: `42px`,
  top: `935px`,
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

const Q3 = styled("div")({
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

const RecentStudy2 = styled("div")({
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
  left: `42px`,
  top: `864px`,
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

const RecentStudy1 = styled("div")({
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
  left: `42px`,
  top: `793px`,
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

const Q11 = styled("div")({
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

const Q6 = styled("div")({
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
  width: `111px`,
  height: `19px`,
  position: `absolute`,
  left: `23px`,
  top: `738px`,
});

const BookMark5 = styled("div")({
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
  left: `41px`,
  top: `641px`,
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

const Q51 = styled("div")({
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

const BookMark4 = styled("div")({
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
  left: `41px`,
  top: `573px`,
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

const Q41 = styled("div")({
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

const BookMark3 = styled("div")({
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
  left: `41px`,
  top: `505px`,
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

const Q31 = styled("div")({
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

const BookMark2 = styled("div")({
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
  left: `41px`,
  top: `437px`,
});

const Rectangle248 = styled("div")({
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

const Q21 = styled("div")({
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

const BookMark1 = styled("div")({
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
  left: `41px`,
  top: `369px`,
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

const Q12 = styled("div")({
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

const Q7 = styled("div")({
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
  width: `96px`,
  height: `19px`,
  position: `absolute`,
  left: `30px`,
  top: `318px`,
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


function MyPage() {
  return (
    <MyPage1>
      <Level151>
        <Level151Span1>{`판다 `}</Level151Span1>
        <Level151Span2>{`Level 15
`}</Level151Span2>
        <Level151Span3>{`동물 성장 단계: 1단계`}</Level151Span3>
      </Level151>
      <Q>
        <QSpan1>{`홍길동`}</QSpan1>
      </Q>
      <Line3></Line3>
      <Rectangle27></Rectangle27>
      <Q1 src={Q1Image} loading="lazy" alt={"캐릭터 들어가는 원"} />
      <CharacterPhoto
        src={CharacterPhotoImage}
        loading="lazy"
        alt={"CharacterPhoto"}
      />
      <RecentStudy5>
        <Rectangle24></Rectangle24>
        <Q5>{`최근 공부 5`}</Q5>
      </RecentStudy5>
      <RecentStudy4>
        <Rectangle241></Rectangle241>
        <Q4>{`최근 공부 4`}</Q4>
      </RecentStudy4>
      <RecentStudy3>
        <Rectangle242></Rectangle242>
        <Q3>{`최근 공부 3`}</Q3>
      </RecentStudy3>
      <RecentStudy2>
        <Rectangle243></Rectangle243>
        <Q2>{`최근 공부 2`}</Q2>
      </RecentStudy2>
      <RecentStudy1>
        <Rectangle244></Rectangle244>
        <Q11>{`최근 공부 1`}</Q11>
      </RecentStudy1>
      <Q6>{`최근 공부한 기능`}</Q6>
      <BookMark5>
        <Rectangle245></Rectangle245>
        <Q51>{`즐겨찾기 5`}</Q51>
      </BookMark5>
      <BookMark4>
        <Rectangle246></Rectangle246>
        <Q41>{`즐겨찾기 4`}</Q41>
      </BookMark4>
      <BookMark3>
        <Rectangle247></Rectangle247>
        <Q31>{`즐겨찾기 3`}</Q31>
      </BookMark3>
      <BookMark2>
        <Rectangle248></Rectangle248>
        <Q21>{`즐겨찾기 2`}</Q21>
      </BookMark2>
      <BookMark1>
        <Rectangle249></Rectangle249>
        <Q12>{`즐겨찾기 1`}</Q12>
      </BookMark1>
      <Q7>{`즐겨찾기 항목`}</Q7>
      <NavigationBar />
    </MyPage1>
  );
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
}

export default MyPage;
