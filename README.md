# Next Authentication

This project is a simple yet powerful authentication system built with Next.js and Next-Auth. It demonstrates how to integrate user authentication into a Next.js application using Next-Auth for seamless and secure login processes.

## Getting Started

### Prerequisites
Ensure you have the following installed:

- Node.js (version 18.17 or higher)
- npm

### Instalation
1. Clone the repository:
   ```bash
   git clone https://github.com/FelipeLL/nextjs-auth.git
   cd nextjs-auth
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root of the project and add the following variables:
   ```bash
   DATABASE_URL=""
   AUTH_SECRET=""
   GITHUB_CLIENT_ID=""
   GITHUB_CLIENT_SECRET=""
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   RESEND_API_KEY=""
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```
 4. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
 

## Features
- User authentication with email/password
- Social authentication (Google, GitHub)
- Session management
- 2FA
- Protected routes

## Demo
Check out the live demo [here](https://nextjs-x-auth.vercel.app) 

## Technologies Used
- Next.js 14
- Typescript
- Tailwind CSS
- Shadcn
- Prisma
- PostreSQL
- Next-auth
