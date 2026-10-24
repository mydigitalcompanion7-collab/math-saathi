# Math Saathi: Google sign-in aur study-time setup

Yeh feature optional hai. Students ko sign-in ke bina website use karne ka option rahega. Google sign-in ke baad user apna aaj ka aur kul study time dekh sakta hai. Owner dashboard sirf total unique accounts aur kul samay dikhata hai; koi naam/email ya per-user report nahi.

## Data aur consent

- Time tabhi ginta hai jab user ne consent diya ho, page visible ho, aur pichhle 5 minute mein interaction hua ho. Browser har 30 second ke aas-paas active time bhejta hai, isliye yeh padhai ke samay ka estimate hai.
- Cloudflare D1 mein Google ka pseudonymous `sub`, UTC date aur seconds store hote hain. Naam, email, sawal ya photo store nahi hote.
- Email token se sirf admin permission jaanchne ke liye padhi jaati hai; database mein nahi likhi jaati. Owner ko aggregate totals milte hain.
- User apna record delete kar sakta hai. Data tab tak rahega jab tak user delete nahi karta.
- Google sign-in Google Identity Services ka istemal karta hai. Google Client ID public website config hai; Worker secrets kabhi GitHub mein mat rakho.

## Ek baar ka setup

### 1. Google sign-in client banao

1. Google Cloud Console mein project banao/chuno aur **Google Auth Platform** mein consent/branding details poori karo.
2. **Clients → Create client → Web application** chuno.
3. Authorized JavaScript origin mein yeh exact origin add karo: `https://mydigitalcompanion7-collab.github.io`.
4. Client ID copy karo. Is site ko test karne ke liye OAuth audience mein apna test account add karo, jab tak app public production ke liye configure na ho.

### 2. Cloudflare Worker aur D1 taiyar karo

Terminal mein repository root kholkar (jahan `worker.js`, `wrangler.toml`, aur `schema.sql` hain):

```powershell
npx wrangler login
npx wrangler d1 create math-saathi-usage
```

Wrangler jo `database_id` de, woh `wrangler.toml` mein `SET_AFTER_CREATING_D1` ki jagah paste karo. Phir schema remote database par chalao:

```powershell
npx wrangler d1 execute math-saathi-usage --remote --file=./schema.sql
```

Repository root se Worker ke secrets set karo:

```powershell
npx wrangler secret put GOOGLE_CLIENT_ID
npx wrangler secret put ADMIN_EMAIL
npx wrangler secret put OPENAI_API_KEY
```

Har prompt par sahi value do. `ADMIN_EMAIL` mein owner ka Google account email do. `OPENAI_API_KEY` tabhi chahiye jab existing AI question-solving endpoint ko chalana ho. Secret ko website file, GitHub, ya chat mein paste mat karo.

### 3. Deploy aur website connect karo

`wrangler.toml` mein `ALLOWED_ORIGIN` ko published site origin hi rehne do. Repository root se Worker deploy karo:

```powershell
npx wrangler deploy
```

Wrangler ka Worker URL `api-config.js` mein set karo:

```js
window.MATH_SAATHI_API_URL = 'https://YOUR-WORKER.YOUR-ACCOUNT.workers.dev';
```

`auth-config.js` mein Google Client ID set karo:

```js
window.MATH_SAATHI_GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com';
```

`api-config.js`, `auth-config.js`, `index.html`, `study-time.js`, `styles.css`, aur `api/` changes commit/publish karo. Github Pages deployment complete hone ke baad site par account panel kholkar consent tick karo aur Google sign-in try karo.

## Owner report

Owner wahi Google account use karke sign in kare jiska email `ADMIN_EMAIL` secret mein set hua. Account panel mein **सभी users का anonymous total** total distinct signed-in accounts aur all-time study minutes dikhata hai. Kisi user ka naam/email ya individual usage owner endpoint return nahi karta.

## Troubleshooting

- Sign-in button na aaye: `auth-config.js` Client ID check karo aur Google Cloud mein exact authorized origin check karo.
- `Usage storage is not configured`: D1 binding/database ID check karo; schema remote DB mein execute karo.
- Sign-in ke baad server error: Worker secrets (`GOOGLE_CLIENT_ID`, `ADMIN_EMAIL`) check karo; URL `api-config.js` se match hona chahiye.
- Browser console mein CORS issue: `ALLOWED_ORIGIN` ko `https://mydigitalcompanion7-collab.github.io` set karke Worker redeploy karo.
