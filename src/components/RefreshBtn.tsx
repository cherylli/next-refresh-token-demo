import axios from "@/utils/axios";
import {setCookies} from "@/utils/set-cookies";

const RefreshBtn = async () => {
    console.log("--- Refresh Btn ---")
    const res = await axios.post("/auth/refresh", {})
    await setCookies(res.headers['set-cookie'])
    return(
        <button>
            Refresh
        </button>
    )
 }

 export default RefreshBtn
