import axios from "axios";


    export const RequestAPI = {
        request(checked: boolean) {
            return axios.post<any>("https://neko-cafe-back.herokuapp.com/auth/test",  {success: checked})
                .then(response => response);
        },
    }