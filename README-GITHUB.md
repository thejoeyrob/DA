# Danco Roofing Applicant Assessment — GitHub Pages package

This folder is ready to host as a static Progressive Web App on GitHub Pages. Keep every supplied file together in the repository root.

This revision replaces the remaining diagram-style answer graphics with fully rendered visual options, shortens the setup button to **Begin assessment**, matches English speech to a high-quality American male voice from the same device voice family as the approved Spanish female voice where possible, preserves the Spanish voice behavior, adds **Repeat spoken audio** inside Help, removes the applicant-number requirement, keeps paired helpers side by side without overlap, prevents horizontal page movement, adds panel-aware prototype watermarking, and uses a smaller transparent-white creator credit. See `IMPLEMENTATION-BRIEF.md` for the controlled-change record.

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `danco-applicant-assessment`.
2. Upload every file from this package to the repository root. Do not upload the separate owner-only access register.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. GitHub will provide the public link after deployment finishes.

`index.html` is the launch file. `manifest.webmanifest` and `service-worker.js` provide installable/offline PWA behavior after the first successful visit.

The full-screen control uses the browser Fullscreen API where supported. On iPhone browser tabs it switches to an expanded in-app view; installing the PWA with **Add to Home Screen** removes Safari's browser bars entirely.

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
- Applicant scores and the optional work-style estimate are not shown to the applicant; only the encoded result code is displayed.
- The administrator dashboard decodes the result code locally in the browser.
- Printing from the administrator dashboard produces a dedicated A4 report; the applicant completion screen is excluded.

This prototype is a static, device-local application. For production recruitment use requiring central records, globally enforced code usage, identity management or audit logs, connect the interface to an approved secure backend before collecting live applicant data.
