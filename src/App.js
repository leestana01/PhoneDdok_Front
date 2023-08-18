import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

//이현철
import Target from "./Target";
import Loading from "./Loading";
import PushAlert from "./PushAlert";
import PhoneType from "./PhoneType";
import SignupDone from "./SignupDone";
import SignUp1 from "./SignUp1";
import SignUp2 from "./SignUp2";
import SignUp3 from "./SignUp3";
import SignUp4 from "./SignUp4";

//이나원
import AddPhoneNumber from "./iphone/addPhoneNumber_iphone";
import AddPhoneNumberS from "./samsung/addPhoneNumber_samsung";

import Mute from "./iphone/Mute_iphone";
import MuteS from "./samsung/Mute_samsung";

import Timer from "./iphone/Timer_iphone";
import TimerS from "./samsung/Timer_samsung";

import Keyboard from "./iphone/keyboard_iphone";
import KeyboardS from "./samsung/keyboard_samsung";

import Screenshoot from "./iphone/screenshot_iphone";
import ScreenshootS from "./samsung/screenshot_samsung";

import OnOff from "./iphone/OnOff_iphone";
import OnOffS from "./samsung/OnOff_samsung";

import FaceTime from "./iphone/FaceTime_iphone";
import FaceTimeS from "./samsung/FaceTime_samsung";

import SpeakerPhone from "./iphone/speakerPhone_iphone";
import SpeakerPhoneS from "./samsung/speakerPhone_samsung";

import DownApp from "./iphone/downApp_iphone.js";
import DownAppS from "./samsung/downApp_samsung.js";

import MemoApp from "./iphone/memo_iphone";
import MemoAppS from "./samsung/memo_samsung";

import Kakao from "./kakao.js";

import Wifi from "./iphone/wifi_iphone.js";
import WifiS from "./samsung/wifi_samsung";

// 김재우
import Category from "./components/Category/Category";
/*import CharacterChange from "./components/CharacterChange/CharacterChange";*/
import HomePage from "./components/HomePage/HomePage";
import MyCharacter from "./components/MyCharacter/MyCharacter";
import MyPage from "./components/MyPage/MyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 이현철 */}
        <Route path="/SignUp1" element={<SignUp1 />} />
        <Route path="/SignUp2" element={<SignUp2 />} />
        <Route path="/SignUp3" element={<SignUp3 />} />
        <Route path="/SignUp4" element={<SignUp4 />} />
        <Route path="/Target" element={<Target />} />
        <Route path="/Loading" element={<Loading />} />
        <Route path="/PushAlert" element={<PushAlert />} />
        <Route path="/PhoneType" element={<PhoneType />} />
        <Route path="/SignupDone" element={<SignupDone />} />

        {/* 이나원 */}
        <Route path="/addPhoneNumber" element={<AddPhoneNumber />} />
        <Route path="/addPhoneNumberS" element={<AddPhoneNumberS />} />

        <Route path="/Mute" element={<Mute />} />
        <Route path="/MuteS" element={<MuteS />} />

        <Route path="/Timer" element={<Timer />} />
        <Route path="/TimerS" element={<TimerS />} />

        <Route path="/Keyboard" element={<Keyboard />} />
        <Route path="/KeyboardS" element={<KeyboardS />} />

        <Route path="/Screenshot" element={<Screenshoot />} />
        <Route path="/ScreenshotS" element={<ScreenshootS />} />

        <Route path="/OnOff" element={<OnOff />} />
        <Route path="/OnOffS" element={<OnOffS />} />

        <Route path="/FaceTime" element={<FaceTime />} />
        <Route path="/FaceTimeS" element={<FaceTimeS />} />

        <Route path="/SpeakerPhone" element={<SpeakerPhone />} />
        <Route path="/SpeakerPhoneS" element={<SpeakerPhoneS />} />

        <Route path="/DownApp" element={<DownApp />} />
        <Route path="/DownAppS" element={<DownAppS />} />

        <Route path="/Memo" element={<MemoApp />} />
        <Route path="/MemoS" element={<MemoAppS />} />

        <Route path="/Kakao" element={<Kakao />} />

        <Route path="/Wifi" element={<Wifi />} />
        <Route path="/WifiS" element={<Wifi />} />

        {/* 김재우 */}
        <Route path="/Category" element={<Category />} />
        <Route path="/CharacterChange" element={<CharacterChange />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/MyCharacter" element={<MyCharacter />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
