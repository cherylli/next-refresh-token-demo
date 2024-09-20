'use client'

import {refreshServer} from "@/services/refresh";
import axios from "axios";

export default function Home() {

  const handleRefreshServer = async () => {
      await refreshServer()
    /*
    // client side refresh


     */
  }

  const handleRefreshClient = async () => {
      await axios.post(`http://localhost:8000/api/v1/auth/refresh`, {}, {
          headers: {
              'Content-Type': 'application/json',
          },
          withCredentials: true
      })
  }

  return (
    <main>
        <button onClick={handleRefreshServer}>Refresh (Server)</button>
        <br/>
        <button onClick={handleRefreshClient}>Refresh (Client)</button>
    </main>
  );
}
