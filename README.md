# Refresh Access Token Demo

Refresh access token demo with Next.js, Auth.js, HTTPOnly cookies, 
using an existing NestJS backend for authentication.

The article is available on my blog: [Handling Refresh Token with Next.js, Auth.js (next-auth v5) Credentials Provider, and HTTPOnly Cookie](https://hashnode.com/draft/66f3bc1cb63bb3af88f65124)

## Getting Started
1. Clone this repo
    ```bash
    git clone https://github.com/cherylli/next-refresh-token-demo.git
    ```

2. Install dependencies

    ```bash
    cd next-refresh-token-demo
    npm install
    ```
    Alternatively, use Docker, app will run on port 3012
    ```bash
    docker compose up
    ```
3. Environment variables

    Copy `.env` content to `.env.local`, and insert `AUTH_SECRET`


4. Run the app

    ```bash
    npm run dev
    ```

Note: The backend used is available here: https://github.com/chingu-x/chingu-dashboard-be

## Pages
- `/api/auth/signin` - Sign in page
- `/` - Home page with buttons to test out actions
- `/redirect` - Mostly same as `/`, but it was used to test redirect after login
- `/server` - Demonstrates error when not calling `refresh` from a client component

![image](https://github.com/user-attachments/assets/2f850512-29cd-4dbb-9160-3000da2112fe)
![image](https://github.com/user-attachments/assets/20ff0e8b-4cbf-4cf4-a001-15ab3f6b5f6b)


## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0). 
The GPL is a copyleft license that requires anyone who distributes your code or a derivative work to make the source available under the same terms. 
This ensures that all users have the freedom to run, study, share, and modify the software.
