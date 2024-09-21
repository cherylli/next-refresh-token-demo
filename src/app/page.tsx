'use client'

import {refreshServer} from "@/services/refresh";
import axios from "axios";
import {GET} from "@/services/requests";

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

  const getMeServer = async () => {
      const res = await GET('users/me')
      console.log(JSON.stringify(res.data))
  }

  return (
      <main>
          <button onClick={handleRefreshServer}>Refresh (Server)</button>
          <br/>
          <button onClick={handleRefreshClient}>Refresh (Client)</button>
          <br/>
          <br/>
          <button onClick={handleRefreshClient}>Refresh (Client)</button>
          <br/>
          <button onClick={getMeServer}>Get (Server)</button>
          <br/>
      </main>
  );
}
