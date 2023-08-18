import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import cancelLogo from "../img/cancel.png";
import successLogo from "../img/tick.png";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const SignupModal = (props) => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (props.isSuccess) {
            setOpen(true);
        }
    }, [props.isSuccess]);

    const handleClose = () => {
        setOpen(false);
        props.handleClose();
    };

    const handleOk = async () => {
        const url = "http://server.phoneddok.kro.kr/members";
        if (props.isSuccess) {
            const updatedSendData = { ...props.sendData };

            try {
                const response = await axios.post(
                    url, // 실제 서버 주소로 변경해야 합니다
                    updatedSendData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );

                console.log(response.data);
                navigate("/Target", {
                    state: {
                        identity: props.sendData.identity,
                        nickName: props.sendData.nickName,
                    },
                });
                handleClose();
                console.log(updatedSendData);
            } catch (error) {
                console.log(error);
                console.log(updatedSendData);

                handleClose();
            }
        }
    };

    return (
        <div>
            {props.isError ? (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="success_img">
                            <img
                                src={successLogo}
                                height="120"
                                width="120"
                                alt="success"
                            ></img>
                        </div>
                        <div className="modal_content">
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                회원가입에 성공하셨습니다.
                            </Typography>
                        </div>
                        <br />
                        <div className="modal_ok_button">
                            <Button onClick={handleOk}>확인</Button>
                        </div>
                    </Box>
                </Modal>
            ) : (
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="cancel_img">
                            <img src={cancelLogo} height="60"></img>
                        </div>
                        <div className="modal_content">
                            <Typography
                                id="modal-modal-description"
                                sx={{ mt: 2 }}
                            >
                                올바른 정보를 입력해주세요.
                            </Typography>
                        </div>
                        <br />
                        <div className="modal_ok_button">
                            <Button onClick={handleClose}>확인</Button>
                        </div>
                    </Box>
                </Modal>
            )}
        </div>
    );
};

export default SignupModal;
