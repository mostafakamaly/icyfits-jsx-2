ICYFITS — React scaffold (Vite + React)

What's here
- Vite + React (JSX) scaffold
- `public/_original/` contains the original `index.html`, `style.css`, and `script.js` copied from your attachments so nothing is deleted.
- `src/` contains a minimal `App.jsx`, `main.jsx`, and `src/assets/` with copies of CSS/JS for iterative conversion.

Run (No Build Required!)

**Quick Start — Open `standalone.html` in your browser:**
Simply double-click `standalone.html` in the project folder and your React app will load instantly. No npm or build step needed! This file uses React from a CDN and contains all your components.

**Alternative: Use npm + Vite (requires Node.js)**

From PowerShell in the project folder (`c:\Users\lenovo\Documents\icy fits jsx\react-app`):

```powershell
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build
```

Note about this environment
- I created a standalone HTML file (`standalone.html`) that works without any build tools — just open it in your browser.
- If you have Node.js installed and npm works, you can use the traditional Vite build process (commands above).
- Both approaches keep your original files in `public/_original/` so nothing is deleted.

Notes / next steps
- The original static files are preserved in `public/_original/`.
- The app currently imports the original stylesheet from `/_original/style.css`. If you'd rather bundle the CSS, copy the full content of `public/_original/style.css` into `src/assets/style.css` and import that instead.
- `src/assets/script.js` contains a placeholder `initSiteBehaviors` export — paste original behaviors there and we can convert them to React hooks or call it from `App.jsx`.
- If you want, I can continue and port interactive behaviors from `public/_original/script.js` into React event handlers/hooks.

Test
----
Run the small smoke test added with Vitest:

```powershell
npm install
npm run test
```

Note: I added `vitest` to devDependencies and a trivial test at `src/__tests__/smoke.test.js`. This environment couldn't run npm here, so run the commands locally.
