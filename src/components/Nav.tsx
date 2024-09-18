import {auth} from "@/auth";
import AuthButton from "@/components/AuthBtn.client";


const Nav = async () => {
    const session = await auth()
    return(
        <div>
            {JSON.stringify(session)} <AuthButton/>
        </div>
    )
 }
 
 export default Nav
