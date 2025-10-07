<h1 align="center">Kuesuto - AI powered quizzes on any topic</h1>

<p align="center">


<img src ="https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black">
<img src ="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white">
<img src ="https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white">
<img src ="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black">
<img src ="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">

</p>


[<img width="1920" height="1080" alt="githubkeusuto" src="https://github.com/user-attachments/assets/5101a8be-5242-48ff-80ca-69ccf1c962e6" />](https://kuesuto.vercel.app)

# Kuesuto

**Kuesuto** is an AI-powered quiz generator that lets you create quizzes on *anything* — from world history and anime to coding or astronomy. Just type a topic, and Kuesuto builds a custom 10-question quiz for you, complete with explanations for every answer.

This project was built using **Next.js**, **TailwindCSS**, and **Google’s Gemini API**.

---

##  What It Does

- Type any topic — Kuesuto will generate a quiz in seconds.
- Every quiz includes:
  - 10 unique questions
  - 4 options each
  - The correct answer
  - An explanation to help you learn
- You can log in with **Google** or **GitHub** to save your session and track progress.

---

## How It Works

1. You enter a topic (like *Bioluminescent sea creatures* or *JavaScript basics*).
2. The app sends your request to **Gemini 1.5 Flash**.
3. The AI returns a quiz in structured JSON format.
4. The frontend displays the questions one by one.
5. You answer, get instant feedback, and see explanations after every question.

---

##  Tech Stack

- **Frontend:** Next.js 14 + TypeScript  
- **Styling:** Tailwind CSS + DaisyUI + shadcn/ui  
- **Auth:** NextAuth (Google & GitHub)  
- **AI:** Google Generative AI (Gemini 1.5 Flash)  
- **Animations:** Framer Motion + Confetti 
- **Charts:** Recharts  

---

##  Setup
Clone the repo and install dependencies:

```bash
git clone https://github.com/shaah1d/kuesuto.git
cd kuesuto
npm install
```
Create a .env.local file in the root directory with the following keys:
```bash
GEMINI_API_KEY=your_gemini_api_key
GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_secret
NEXTAUTH_SECRET=your_random_secret
```
