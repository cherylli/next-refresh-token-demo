import axios, {setCookies} from "@/utils/axios";

const RefreshBtn = async () => {
    const res = await axios.post("/auth/refresh", {})
    await setCookies(res.headers['set-cookie'])
    return(
        <button>
            Refresh
        </button>
    )
 }

 export default RefreshBtn
