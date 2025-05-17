# 📝 Resumate - AI Resume Builder

Resumate is an intelligent and sleek AI-powered Resume Builder that enables users to craft multiple, job-specific resumes with rich customization and effortless AI assistance — all in one seamless interface.

![Project Banner](./img1.png) <!-- You can replace this with your banner image -->

---

## 🚀 Features

- 🔐 **Clerk Authentication**
  - Secure Sign-up/Sign-in using [Clerk](https://clerk.dev/) for a personalized user experience.

- 📄 **Create, Edit, Save, Delete & Download Resumes**
  - Manage multiple resumes tailored to different job profiles.
  - CRUD operations backed by [Strapi CMS](https://strapi.io/).

- 🧠 **AI-Generated Content**
  - Use the **Gemini AI API** to auto-generate:
    - `Profile Summary`
    - `Work Experience`

- 🎨 **Theme Customization**
  - Select custom **theme border colors** for your resume for a personalized aesthetic.

- ✍️ **Rich Text Formatting**
  - Use a powerful **RichTextEditor** to:
    - Format `Work Experience` section with bullet points (disc, numeric, alphabetic).
    - Apply **Bold**, *Italic*, or <u>Underline</u> styles to your content.

- ☁️ **Strapi CMS Integration**
  - All resume data is saved on a **headless CMS backend** for persistent and scalable storage.

---

## 🧰 Tech Stack

| Technology     | Description                          |
|----------------|--------------------------------------|
| [React](https://reactjs.org/)       | UI Library used with Vite setup     |
| [Vite](https://vitejs.dev/)         | Lightning-fast frontend bundler     |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework         |
| [ShadCN UI](https://ui.shadcn.dev/) | Beautiful, accessible UI components |
| [Strapi CMS](https://strapi.io/)    | Headless CMS Backend                |
| [Clerk](https://clerk.dev/)         | User Authentication & Management    |
| [Gemini AI API](https://ai.google.dev/) | AI Content Generation               |

---

## 📸 Screenshots

> Insert screenshots below by replacing the image links with your actual paths.

| Login Page | Dashboard | Editor |
|------------|-----------|--------|
| ![Login](./img12.png) | ![Dashboard](./img1.png) | ![Editor](./img7.png) |

---

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/resumate-ai-resume-builder.git
cd resumate-ai-resume-builder
