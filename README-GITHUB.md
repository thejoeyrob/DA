# Danco Roofing Applicant Assessment — GitHub Pages package

This folder is ready to host as a static Progressive Web App on GitHub Pages. Keep every supplied file together in the repository root.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `danco-applicant-assessment`.
2. Upload every file from this package to the repository root. Do not upload the separate owner-only access register.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the public link after deployment finishes.

`index.html` is the launch file. `manifest.webmanifest` and `service-worker.js` provide installable/offline PWA behavior after the first successful visit.

The full-screen control uses the browser Fullscreen API where supported. On iPhone browser tabs it switches to an expanded in-app view; installing the PWA with **Add to Home Screen** removes Safari's browser bars entirely.

## Email graphic

Use `email-applicant-assessment-banner.png` as the image in an applicant email. Add the published GitHub Pages URL as the image hyperlink so selecting the graphic opens the assessment.

## Access and privacy

- The app starts in locked prototype mode.
- A valid private trial code enables three completed assessments on the browser/device where it is entered.
- The trial-code register is intentionally not included in this public hosting package.
- Applicant scores and the optional work-style estimate are not shown to the applicant; only the encoded result code is displayed.
- The administrator dashboard decodes the result code locally in the browser.
- Printing from the administrator dashboard produces a dedicated A4 report; the applicant completion screen is excluded.

This prototype is a static, device-local application. For production recruitment use requiring central records, globally enforced code usage, identity management or audit logs, connect the interface to an approved secure backend before collecting live applicant data.
