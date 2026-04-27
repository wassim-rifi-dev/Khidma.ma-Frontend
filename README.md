# Khidma.ma Frontend

<div align="center">
  <img src="./src/assets/logoLight.svg" alt="Khidma.ma logo" width="220" />
  <h3>React frontend for the Khidma.ma services marketplace</h3>
  <p>
    <img src="https://img.shields.io/badge/React-19-0f172a?style=for-the-badge&logo=react" alt="React 19" />
    <img src="https://img.shields.io/badge/Vite-8-f59e0b?style=for-the-badge&logo=vite" alt="Vite 8" />
    <img src="https://img.shields.io/badge/Tailwind-4-0ea5e9?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS 4" />
    <img src="https://img.shields.io/badge/Router-v7-111827?style=for-the-badge" alt="React Router 7" />
  </p>
</div>

---

> The frontend delivers the public marketplace, the professional workspace, and the admin panels in a single React application.

## Overview

This app is the client-facing interface for the Khidma.ma platform. It powers the experience for:

- Clients browsing services, profiles, reviews, and requests
- Professionals managing services, profile data, analytics, and incoming requests
- Admins monitoring platform activity and moderation areas

The frontend communicates with the Laravel API in `../Backend`.

## Stack

- React 19
- Vite 8
- React Router 7
- Axios
- Tailwind CSS 4
- Chart.js

## UI Scope

| Space | Purpose |
| --- | --- |
| Public marketplace | Browse services, profiles, and reviews |
| Professional dashboard | Manage services, requests, and analytics |
| Admin area | Monitor users, categories, moderation, and platform health |

## Main Areas

- `src/features/services`: public and professional service flows
- `src/features/professional`: dashboard, analytics, requests, profile editing
- `src/features/admin`: moderation panels and analytics
- `src/routes`: route definitions
- `src/shared/services`: API client configuration
- `src/shared/utils`: reusable helpers such as storage URL resolution

## Environment

Create a `.env` file in `Frontend/` if you want to override local defaults:

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_STORAGE_BASE_URL=http://localhost:8000/storage/
```

Current fallback behavior:

- API base URL defaults to `http://localhost:8000/api`
- Storage base URL defaults to `http://localhost:8000/storage/`

## Local Development

```bash
npm install
npm run dev
```

The Vite dev server usually runs on:

```text
http://localhost:5173
```

## Available Scripts

- `npm run dev`: start the development server
- `npm run build`: create a production build
- `npm run lint`: run ESLint
- `npm run preview`: preview the production build locally

## API Integration Notes

- The Axios instance lives in `src/shared/services/api.js`
- Auth tokens are read from `localStorage` and sent as a Bearer token
- Asset URLs are normalized through `src/shared/utils/getStorageUrl.js`

## Suggested Workflow

1. Start the backend server from `../Backend`
2. Make sure the API and storage URLs match your local backend
3. Run `npm run dev`
4. Build before shipping with `npm run build`

## Related Docs

- Root project guide: [`../README.md`](../README.md)
- Backend API guide: [`../Backend/README.md`](../Backend/README.md)
