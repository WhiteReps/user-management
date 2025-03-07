## Description
Simple user management application built with Next.js and TypeScript that fetches and displays a list of users from the JSONPlaceholder API. The app allows users to view detailed information about each user, mark users as favorites, and filter users by name. The UI is styled using Tailwind CSS, and icons are implemented using the @heroicons/react library.

## Implemented features
- Fetching User Data:
Fetches user data from the endpoint https://jsonplaceholder.typicode.com/users. Displays a list of users with their name, email, and company name.

- Favorites:
Users can be added to or removed from a favorites list. Favorites are persisted in localStorage for a seamless experience across page reloads.
A separate "Favorites" page displays the list of favorited users.

- Search:
A search bar allows users to filter the list of users by name (case-insensitive).

- Responsive Design:
The app is fully responsive, with a grid layout that adjusts from 1 column on mobile to 3 columns on desktop.

## Tech stack
- Frontend Framework: Next.js (App Router) with TypeScript for building the SPA.
- Styling: Tailwind CSS for utility-first styling and responsive design.
- Icons: @heroicons/react for scalable and customizable icons.
- State Management: React hooks (useState, useEffect) and localStorage for managing favorites.
- API: JSONPlaceholder API for fetching user data.
- Toast Notifications: react-hot-toast for displaying success/error messages.

## How to run
First, Clone the Repository:
```bash
git clone https://github.com/WhiteReps/user-management.git
cd user-management
```

Second, Install Dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Finally, Open the App:
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
