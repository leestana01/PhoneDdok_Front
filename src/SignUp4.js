import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp4 = () => {
    const navigate = useNavigate();

    const initialSendData = {
        nickname: "",
        identity: "",
    };

    const [nickNameErrors, setNickNameErrors] = useState(true);
    const [identifyErrors, setIdentifyErrors] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const [sendData, setSendData] = useState(initialSendData);

    const validateCredentials = () => {
        // Implement your logic to validate credentials.
        // Assume successful validation and set isSuccess to true.
        setIsSuccess(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateCredentials();
        handleRegistration();
    };

    const checkNickName = (e) => {
        var nameRegExp = /^[가-힣]+$/;
        setNickNameErrors(!nameRegExp.test(e.target.value));
    };

    const checkId = (e) => {
        var idRegExp = /^[a-z]+[a-z0-9]{5,19}$/;
        setIdentifyErrors(!idRegExp.test(e.target.value));
    };

    const onchange = (e) => {
        setSendData({
            ...sendData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegistration = async () => {
        const url = "http://server.phoneddok.kro.kr/members";
        if (isSuccess) {
            const updatedSendData = { ...sendData };

            try {
                const response = await axios.post(url, updatedSendData, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                console.log(response.data);

                if (response.status === 201) {
                    alert("회원가입에 성공하셨습니다.");
                    navigate("/PhoneType", {
                        state: {
                            identity: sendData.identity,
                        },
                    });
                } else {
                    if (response.data && response.data.message) {
                        alert("회원가입 실패: " + response.data.message);
                    } else {
                        alert("회원가입에 실패했습니다.");
                    }
                }
            } catch (error) {
                console.log(error);
                alert("회원가입에 실패했습니다.");
            }
        }
    };

    return (
        <div className="SignUp4">
            <div className="whole">
                <form onSubmit={handleSubmit} className="form_container">
                    <div className="signup_texfield">
                        <div className="head">
                            <h2>이름을 입력해주세요</h2>
                        </div>
                        <TextField
                            value={sendData.nickname}
                            label="이름"
                            required
                            name="nickname"
                            margin="normal"
                            fullWidth
                            autoFocus
                            error={nickNameErrors && sendData.nickname !== ""}
                            onChange={(e) => {
                                onchange(e);
                                checkNickName(e);
                            }}
                            helperText={
                                nickNameErrors && sendData.nickname !== ""
                                    ? "올바른 이름을 입력해주세요."
                                    : null
                            }
                        />
                    </div>
                    <div className="signup_texfield">
                        <div className="head">
                            <h2>아이디를 입력해주세요</h2>
                        </div>
                        <TextField
                            value={sendData.identity}
                            label="아이디"
                            required
                            name="identity"
                            margin="normal"
                            fullWidth
                            autoFocus
                            error={identifyErrors && sendData.identity !== ""}
                            onChange={(e) => {
                                onchange(e);
                                checkId(e);
                            }}
                            helperText={
                                identifyErrors && sendData.identity !== ""
                                    ? "올바른 아이디를 입력하세요"
                                    : null
                            }
                        />
                    </div>
                    <Button
                        className="submit_button"
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        확인
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default SignUp4;
