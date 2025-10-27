<h1 align="center">Kuesuto - AI powered quizzes on any topic</h1>

<p align="center">


<img src ="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
<img src ="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src ="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white">
<img src="https://img.shields.io/badge/Gemini%202.5-4285F4.svg?style=for-the-badge&logo=google&logoColor=white">
<img src ="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">

</p>


[<img width="1920" height="1080" alt="githubkeusuto" src="https://github.com/user-attachments/assets/5101a8be-5242-48ff-80ca-69ccf1c962e6" />](https://kuesuto.vercel.app)

# Kuesuto

Kuesuto is a web application that generates quizzes on user-specified topics using the Google Gemini AI model. Users enter a topic, optionally with a difficulty level (easy, medium, hard), and the app creates a 10-question multiple-choice quiz in JSON format. The quiz includes questions, options, correct answers, and explanations. Authentication is handled with NextAuth for Google and GitHub providers. The frontend uses Next.js with Tailwind CSS and shadcn/ui components.

## Features

- Topic-based quiz generation via AI prompt.
- Support for difficulty levels in user input.
- 10 questions per quiz with 4 options each.
- Score tracking and explanations after submission.
- User authentication and session management.
- Responsive UI with dark mode support.
- SEO setup with sitemap and meta tags.

## Setup

1. Clone the repository:
   ```
   git clone <repository-url>
   cd shaah1d-kuesuto
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add the following variables:
   ```
   GEMINI_API_KEY=your_gemini_api_key
   GOOGLE_ID=your_google_client_id
   GOOGLE_SECRET=your_google_client_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

For production builds:
```
npm run build
npm start
```

## File Structure

```
shaah1d-kuesuto/
├── README.md
├── auth.ts
├── components.json
├── middleware.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── .eslintrc.json
├── public/
│   ├── robots.txt
│   └── sitemap.xml
└── src/
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── api/
    │   │   ├── auth/
    │   │   │   ├── [...nextauth]/
    │   │   │   │   └── route.ts
    │   │   │   └── signin/
    │   │   │       └── page.tsx
    │   │   └── quiz/
    │   │       └── route.ts
    │   └── pages/
    │       ├── about/
    │       │   └── page.tsx
    │       └── how-it-works/
    │           └── page.tsx
    ├── components/
    │   ├── forms/
    │   │   ├── Auth.tsx
    │   │   └── QuizInput.tsx
    │   ├── layout/
    │   │   ├── Footer.tsx
    │   │   └── Navbar.tsx
    │   ├── pages/
    │   │   ├── About.tsx
    │   │   ├── Finished.tsx
    │   │   └── Quiz.jsx
    │   └── ui/
    │       ├── accordion.tsx
    │       ├── avatar.tsx
    │       ├── badge.tsx
    │       ├── button.tsx
    │       ├── card.tsx
    │       ├── chart.tsx
    │       ├── form.tsx
    │       ├── input.tsx
    │       ├── label.tsx
    │       ├── navigation-menu.tsx
    │       ├── scroll-area.tsx
    │       ├── select.tsx
    │       ├── separator.tsx
    │       └── timeline.tsx
    └── lib/
        └── utils.ts
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS with daisyUI and shadcn/ui
- NextAuth.js for authentication
- Google Gemini API for quiz generation
- React Hook Form and Zod for forms
- Framer Motion for animations
- Vercel Analytics and Speed Insights

## License

This project is licensed under the Apache License 2.0 — see the [LICENSE](./LICENSE) file for details.

