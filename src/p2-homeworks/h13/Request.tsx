import React, {useState} from 'react';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {RequestAPI} from "./RequestsAPI";


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(true)
    const [result, setResult] = useState<string>('error')
    const onCheckedChange = () => {
        setChecked(!checked);
    }


    const sendRequest = () => {

        RequestAPI.request(checked)
            .then(response => {
                setResult(response.data.errorText);
                console.log(response.data.errorText);
            })
            .catch(error => {
                setResult(error.response ? error.response.data.errorText : error.message);
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return (
        <div>
            <div>
                <SuperCheckbox
                    onChangeChecked={onCheckedChange}
                >
                    checkbox
                </SuperCheckbox>
            </div>
            <div>
                <SuperButton onClick={sendRequest}>
                    request
                </SuperButton>
            </div>
            <div>
                {result}
            </div>
        </div>
    );
};
