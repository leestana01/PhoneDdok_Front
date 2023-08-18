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
import Mute from "./iphone/Mute_iphone";
import MuteS from "./samsung/Mute_samsung";
import Timer from "./iphone/Timer_iphone";
import TimerS from "./samsung/Timer_samsung";
import Keyboard from "./iphone/keyboard_iphone";
import Screenshoot from "./iphone/screenshot_iphone";
import OnOff from "./iphone/OnOff_iphone";
import FaceTime from "./iphone/FaceTime_iphone";
import SpeakerPhone from "./iphone/speakerPhone_iphone";
import DownApp from "./iphone/downApp_iphone.js";
import MemoApp from "./iphone/memo_iphone";
import Kakao from "./kakao.js";
import Wifi from "./iphone/wifi_iphone.js";

// 김재우
import Category from "./components/Category/Category";
import CharacterChange from "./components/CharacterChange/CharacterChange";
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
                <Route path="/Mute" element={<Mute />} />
                <Route path="/Timer" element={<Timer />} />
                <Route path="/Keyboard" element={<Keyboard />} />
                <Route path="/Screenshot" element={<Screenshoot />} />
                <Route path="/OnOff" element={<OnOff />} />
                <Route path="/FaceTime" element={<FaceTime />} />
                <Route path="/SpeakerPhone" element={<SpeakerPhone />} />
                <Route path="/DownApp" element={<DownApp />} />
                <Route path="/Memo" element={<MemoApp />} />
                <Route path="/Kakao" element={<Kakao />} />
                <Route path="/Wifi" element={<Wifi />} />
                <Route path="/MuteS" element={<MuteS />} />
                <Route path="/TimerS" element={<TimerS />} />

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
