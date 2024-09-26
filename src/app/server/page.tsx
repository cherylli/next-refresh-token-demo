import {refreshServer} from "@/services/refresh";

export default async function ServerPage() {
    // this page will give an error
    await refreshServer()
}
