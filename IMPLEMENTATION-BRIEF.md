# Danco Applicant Assessment — v20 implementation brief

## Outcome

This release removes browser/device text-to-speech from the active app, adds an administrator-controlled Application mode, and preserves the existing work-style and trade-assessment sequence.

The app remains a static GitHub Pages Progressive Web App. No server, database or email service is introduced.

## 1. Consistent narration on every supported device

- Removed the device voice list and all active `speechSynthesis` voice-selection logic.
- Added 180 indexed narration segments covering every English and Spanish instruction, question and answer option, contained in two root-level MP3 files for easy GitHub upload.
- English uses one consistent offline-generated American English male neural voice.
- Spanish uses one consistent offline-generated female Spanish neural voice.
- The same files play on iPhone, iPad, Android, Windows and macOS; the operating system can no longer substitute a novelty, compact or robotic device voice.
- Audio remains optional and follows the existing audio on/off setting.
- Help retains **Repeat spoken audio** and adds **Test standard narration**.
- The service worker precaches narration after the first successful online visit so the installed app can continue to speak offline.
- The private question bank was rendered locally; it was not submitted to an external speech service.

## 2. Administrator-controlled start mode

The administrator dashboard now provides two choices:

- **Assessment mode** — the current name-only setup followed by the existing assessment.
- **Application mode** — a lightweight job-application form followed by the same existing assessment.

The selected mode is stored on the current browser/device and applies to the next applicant. Changing the setting does not alter an assessment already in progress or a completed result.

## 3. Prototype job-application form

Application mode adds:

- full name
- email address
- phone number
- city and state
- available start date
- desired position: Service Helper, Roofer or Foreman
- commercial roofing experience
- U.S. work-authorization response
- valid-driver’s-license response
- yes/no choice for consideration for another listed role when the assessment suggests a different fit

Only full name is required during prototype testing. All added fields may be left blank so reviewers can continue through the flow quickly.

## 4. Application number and deliberate submission

- The existing encoded DRA result code also becomes the automated **Application number** in Application mode.
- A completed application is not automatically stored.
- **Submit application for review** opens a confirmation dialog and requires the administrator PIN.
- Only a successful PIN-confirmed submission enters the prototype application list.
- Re-submitting the same application number updates the existing record instead of creating a duplicate.
- Up to 100 submitted application records are retained locally.

## 5. Local prototype application list

The administrator dashboard now shows a simple selector containing:

- applicant name
- application number/code

Selecting an applicant and choosing **Load and decode**:

- decodes the existing assessment code
- shows the job-applicant credentials in a dedicated section
- shows role alignment, tier scores, work-style guidance and question breakdown
- supports the existing print/save-PDF report

This storage is intentionally device-local browser storage. It is suitable for controlled prototype review on one device, but it is not a shared inbox, central database or email submission system. Production use requires an approved secure backend and appropriate hiring-data controls.

## 6. Responsive and presentation refinements

- Added responsive two-column/one-column application fields.
- Added polished administrator mode and submission panels.
- Added a printable job-applicant details section.
- Maintained viewport width constraints to prevent side-to-side page movement.
- Preserved paired-character grid placement so the male and female helpers remain side by side without overlap.
- Preserved the small white creator mark and surface-aware prototype watermarks.

## Preserved behaviour

The following are unchanged:

- language selection and bilingual assessment content
- optional five-question work-style section
- all ten knowledge questions, answer mappings and randomised display order
- review/answer timers and timeout behaviour
- trial codes, owner access, administrator PIN and trial-use limits
- result-code version, encoding and decoding
- applicant-facing score privacy
- fullscreen behaviour and Home Screen installation
- existing image assets, scoring thresholds and interview recommendations
- flat-file GitHub Pages deployment structure

## Changed and added deployment files

- `index.html`
- `app.css`
- `app.js`
- `manifest.webmanifest`
- `service-worker.js`
- `narration-manifest.js` (new)
- `narration-en.mp3` (new)
- `narration-es.mp3` (new)
- `README-GITHUB.md`
- `IMPLEMENTATION-BRIEF.md`

## Acceptance checks

- No active browser/device speech-synthesis call remains.
- The narration manifest contains 90 English and 90 Spanish timed segments.
- Both root-level narration MP3 files are valid and non-empty.
- English narration uses the bundled American English male voice.
- Spanish narration uses the bundled female Spanish voice.
- Help can replay the most recent spoken instruction, question and answer sequence.
- Assessment mode requests a full name only.
- Application mode shows the optional credentials and three-role selector.
- The existing assessment starts after either setup mode without question, timer or scoring changes.
- Application mode labels the DRA code as the application number.
- Submission requires the administrator PIN and is not automatic.
- Stored applicants can be selected by name/code and decoded.
- The administrator report includes submitted application credentials.
- Existing installations request the v20 files and narration cache rather than stale voice logic.
