import axios from "axios";
import { ErrorHandling } from "./ErrorHandling";
import Cookies from "js-cookie";

const url = process.env.REACT_APP_SERVICE_URL;

const AuthService = {
    login: async ({ email, password }) => {
        try {
            const res = await axios.post(
                `${url}/app/auth/login`,
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );
            const token = Cookies.get("token");

            return { res: res, token: token, status: "success" };
        } catch (err) {
            ErrorHandling(err);
        }
    },
    profile: async () => {
        try {
            const res = await axios.get(`${url}/app/auth/profile`, {
                headers: { Authorization: `Bearer ${Cookies.get("token")}` },
            });
            return res.data;
        } catch (err) {
            ErrorHandling(err);
        }
    },
};

export default AuthService;
