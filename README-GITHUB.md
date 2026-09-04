# Danco Roofing Applicant Assessment — GitHub Pages package

This folder is ready to host as a static Progressive Web App on GitHub Pages. Keep every supplied file together in the repository root.

This revision uses bundled English and Spanish neural narration, keeps **Repeat spoken audio**, and provides an administrator-controlled **Application mode** ahead of the existing assessment. Application mode provides optional applicant credentials, a three-role selector, a normal reference and PIN-gated submission to a live shared review list. Assessment-only results can be submitted to the same list. The existing work-style questions, trade questions, timing, scoring and internal result-code logic remain intact. See `IMPLEMENTATION-BRIEF.md` for the controlled-change record.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `danco-applicant-assessment`.
2. Upload every file from this package to the repository root. Do not upload the separate owner-only access register.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the public link after deployment finishes.

`index.html` is the launch file. `manifest.webmanifest` and `service-worker.js` provide installable/offline PWA behavior after the first successful visit. The update package is fully flat: upload `narration-en.mp3`, `narration-es.mp3` and `narration-manifest.js` beside the other root-level app files. No folders are required.

The full-screen control uses the browser Fullscreen API where supported. On iPhone browser tabs it switches to an expanded in-app view; installing the PWA with **Add to Home Screen** removes Safari's browser bars entirely.

Version 23 retains the restored audio-support reason: reading support, sight support or a general spoken-guidance preference. Reading and sight support provide 15 seconds of additional answer time and a direct **Repeat question** control. Submitted applications and assessment-only results are now shared across devices in **Yet to process**, **Actioned** and **Archived** administrator queues. It retains the safe audio margins, application-choice summary and **Confirm final answer** protection.

## Save the app to an iPhone or iPad Home Screen

1. Open the published assessment link in **Safari**. If the link opens inside Mail, Outlook, Teams or another app, use its menu to choose **Open in Safari** first.
2. Select Safari's **Share** button—the square with an upward arrow.
3. Scroll down and select **Add to Home Screen**.
4. Keep or edit the displayed app name, then select **Add**.
5. Launch the assessment from its new Danco icon on the Home Screen.

Opening the Home Screen version gives the most app-like, full-screen experience. Keep an internet connection for the first successful visit so the files can be stored for later offline use.

## Save the app to an Android Home Screen

1. Open the published assessment link in **Google Chrome**.
2. Select Chrome's **three-dot menu**.
3. Select **Install app** or **Add to Home screen**—the wording depends on the Android device and Chrome version.
4. Select **Install** or **Add** to confirm.
5. Launch the assessment from its new Danco icon on the Home Screen or in the app drawer.

On Samsung Internet, open the menu and select **Add page to → Home screen**. Keep an internet connection for the first successful visit so the app can prepare its offline files.

## Email graphic

Use `email-applicant-assessment-banner.png` as the image in an applicant email. Add the published GitHub Pages URL as the image hyperlink so selecting the graphic opens the assessment.

## Access and privacy

- The app starts in locked prototype mode.
- A valid private trial code enables three completed assessments on the browser/device where it is entered.
- The trial-code register is intentionally not included in this public hosting package.
- Applicant scores and the optional work-style estimate are not shown to the applicant.
- Application mode displays only a normal reference after successful submission; its internal result code is not exposed.
- Assessment-only prototype mode retains the encoded result code for manual testing and fallback.
- The administrator dashboard loads deliberately submitted records from a protected shared service.
- Administrators can choose Assessment mode or Application mode for the next applicant.
- Only PIN-confirmed submissions are added to the shared review list.
- Submitted application and assessment-only details sync to the administrator list on another connected device.
- Administrators can move records from **Yet to process** to **Actioned** or **Archived**, and can return them to the working queue if needed.
- Printing from the administrator dashboard produces a dedicated A4 report; the applicant completion screen is excluded.

The GitHub Pages interface remains static, but its deliberately submitted review records use a live backend. Before collecting real production applicant data, Danco should complete its organisational privacy, retention, identity-management and audit-log review.
