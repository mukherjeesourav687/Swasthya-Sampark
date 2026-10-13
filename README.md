# Swasthya Sampark

Academic healthcare web project with a symptom assessment flow, patient and doctor portals, AI chat, and a separate machine-learning prediction service.

## Project structure
- `swasthyaSampark/`: React, TypeScript, Vite and Tailwind frontend.
- `backend/`: Node.js/Express API, MongoDB integration, AI and email services.
- `6ml/6ml/`: FastAPI prediction service, datasets and six saved classifiers.

## Run the frontend
Requires Node.js and npm.
```sh
cd swasthyaSampark
npm install
npm run dev
```
Open http://localhost:5173.

## Backend configuration
Copy `backend/.env.example` to `backend/.env` and fill in your own service configuration, then run:
```sh
cd backend
npm install
npm start
```
The frontend API locations are currently defined in `swasthyaSampark/src/components/consultation/services/api.ts`. Update them for your own services. Google OAuth also needs a client configured for your domain; its client ID is in `src/App.tsx`.

## Machine-learning service
The service is in `6ml/6ml/server.py`, runs on port 8000 and loads saved pickle models. Use a compatible Python/scikit-learn environment for these older models. Review the provided requirements before installing them; do not assume Python 3.13 compatibility.

## Preview verification and limitations
- Frontend TypeScript check and Vite production build passed on October 13, 2026.
- The symptom-checker introduction rendered in the local browser.
- Backend authentication, AI prediction, email, uploads and calls have not been verified end to end.
- The original frontend included a video-call server secret. It has been removed from this upload copy. Video calls are disabled until a backend token endpoint is implemented; do not expose server secrets in frontend code. Rotate the original credential with its provider.
- Dependency installation reported vulnerabilities in the existing dependency tree; review and update dependencies before production deployment.
- This is an academic demonstration, not a validated medical diagnostic system.

## Source attribution
This local project originated from https://github.com/PrayasChakraborty/Swasthya-Sampark. Preserve contributor credit and verify redistribution rights before reuse. This copy excludes original Git history and editor settings.
