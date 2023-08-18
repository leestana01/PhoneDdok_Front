import FormControl from "@mui/material/FormControl";
import { InputLabel } from "@mui/material";
import NativeSelect from "@mui/material/NativeSelect";
import { useState } from "react";
const PhoneType = () => {
    const [type, setType] = useState("");
    const onChange = (e) => {
        setType(e.target.value);
    };
    
    return (
        <div className="PhoneType">
            <form className="phonetype_form_container">
                <div className="head">
                    <h2>핸드폰 기종을 선택 해주세요.</h2>
                    <h4>내가 보유한 휴대폰에 맞게 교육이 진행됩니다.</h4>
                </div>
                <FormControl fullWidth>
                    <InputLabel
                        variant="standard"
                        htmlFor="uncontrolled-native"
                    >
                        기종 선택
                    </InputLabel>
                    <NativeSelect
                        inputProps={{
                            name: "Phone Type",
                        }}
                        onChange={onChange}
                    >
                        <option value={"galaxy"}>갤럭시</option>
                        <option value={"iphone"}>아이폰</option>
                    </NativeSelect>
                </FormControl>
                <button className="phonetype_submit_btn">확인</button>
            </form>
        </div>
    );
};

export default PhoneType;
