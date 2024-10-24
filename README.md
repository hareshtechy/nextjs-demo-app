# Next.js Demo Application

This is a Next.js application with authentication, admin functionality, and API routes.

## Features

- Next.js 14 framework
- Authentication using NextAuth.js
  - Credentials provider (email/password)
  - Google provider
- Prisma ORM for database management
- Admin section with layout
- API routes
- Tailwind CSS for styling
- TypeScript support

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up your environment variables in a `.env` file:
   ```
   DATABASE_URL=your_database_url
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```
4. Run the development server:
   ```
   npm run dev
   ```

## Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint
- `npm run preview-email`: Preview emails (on port 3030)

## Project Structure

- `app/`: Main application code
  - `api/`: API routes
  - `admin/`: Admin section
- `prisma/`: Prisma schema and client

## Dependencies

Key dependencies include:

- Next.js
- NextAuth.js
- Prisma
- Tailwind CSS
- TypeScript
- Zod for validation

For a full list of dependencies, see the `package.json` file.
