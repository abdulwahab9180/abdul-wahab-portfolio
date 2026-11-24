# Abdul Wahab — Professional Portfolio

A responsive, dark, English-language personal portfolio built with Next.js App Router, TypeScript and Lucide icons. The portfolio positions Abdul Wahab across business leadership, technology, consultancy and creative work.

## Profile sections included

- **G&M Co.** — Co-Director and 50% Business Partner. The business portfolio presented here includes logistics and cargo solutions, truck dispatching, Shopify/Amazon store handling, website development and general order supply. G&M Co. / Zia & Co. branding is referenced without inventing a legal relationship between the names.
- **Red Productions** — Assistant Director, January 2024–present.
- **Red Consultants** — Operations Manager, shown as “Red Consultants (Powered by Red Rabbit Technologies (SMC-Private) Limited)” based on prior company documentation. Workstreams include visa consultation and documentation support, client-case coordination, travel planning, group tours, DMC outreach and international employer research.
- **Technical and creative skills** — Programming, web development, WordPress, WooCommerce, Shopify, SEO, design, video editing and English/Urdu/Punjabi translation.
- **Selected projects** — SmartRoute Pakistan, G&M Co., Style Syn, Zarveen, Apple Oasis, NOVA SEOUL, WordPress/WooCommerce work and Shopify/EPROLO workflow.
- **Education and earlier work** — ADPCS, Superior University (2024); Intermediate Pre-Engineering and Matric, Superior College; earlier call-centre experience in Lahore.

Project statuses are deliberately distinguished as prototype, concept, setup/planning or implementation work. No fake revenue, client metrics, awards or launched-product claims have been added.

## Run locally

1. Install Node.js 20.9 or newer.
2. Extract this ZIP and open the `abdul-wahab-portfolio` folder in VS Code.
3. Open a terminal in that folder and run:

   ```bash
   npm install
   ```

4. Copy `.env.example` to `.env.local`.
5. Set `NEXT_PUBLIC_SITE_URL` to the final public URL once Vercel has assigned it. For local preview, the default fallback is sufficient.
6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open `http://localhost:3000` in your browser.
8. Before deployment, run:

   ```bash
   npm run build
   ```

## Publish with GitHub + Vercel

1. Sign in to GitHub and create a **new repository** named `abdul-wahab-portfolio`. Do not overwrite the existing `gm-co-platform` repository; that belongs to a separate G&M Co. project.
2. Upload the contents of this project folder to the new repository (the `package.json` file should be at the repository root).
3. Sign in to Vercel using GitHub and choose **Add New → Project**.
4. Import `abdul-wahab-portfolio`. Vercel should detect Next.js automatically; keep the default build settings.
5. Add `NEXT_PUBLIC_SITE_URL` in Project Settings → Environment Variables after Vercel gives you the public project URL, for example `https://your-project-name.vercel.app`.
6. Deploy. Test the website on desktop and mobile, and check every business contact link before sharing it.

Vercel plan terms can change. Check the current Hobby plan restrictions before using a free plan for a portfolio that promotes commercial services: https://vercel.com/docs/plans/hobby and https://vercel.com/pricing.

## Before public launch

- Add a professional headshot (optional but recommended).
- Add a personal professional email address.
- Add personal LinkedIn and GitHub profile links.
- Add a downloadable PDF CV if desired.
- Confirm that the G&M Co. and Red Consultants titles match the current formal company records before publication.
- Confirm that the business WhatsApp numbers displayed in the contact section are still approved for public enquiries.
- Add screenshots and verified public links for each project. Keep concept/prototype labels where applicable.
- Remove any project or business information that is confidential or not approved for public display.

## Google visibility

The project includes metadata, Open Graph information, `robots.txt` and `sitemap.xml`. After the website is live:

1. Open Google Search Console: https://search.google.com/search-console/about
2. Add the exact Vercel URL as a URL-prefix property (or verify a custom domain later).
3. Complete the ownership verification method Google provides.
4. Submit `https://YOUR-LIVE-SITE/sitemap.xml` under Sitemaps.
5. Use URL Inspection to request indexing of the homepage.

Google indexing and ranking are not guaranteed and can take time. A free `vercel.app` address is shareable, but a custom domain is generally easier to remember and brand later.

## Notes

- No personal date of birth, private financial details, client passport data or confidential case information is included.
- The portfolio currently uses business contact numbers found in the user's own business marketing materials. Verify they remain approved before publishing.
- Contact email, profile image, social links and a CV download are intentionally left for the owner to provide.
