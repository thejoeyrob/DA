# Danco Applicant Assessment — v21 implementation brief

## Outcome

This release retains the device-independent recorded narration and administrator-controlled Application mode, while adding safer audio cue margins, explicit application choices on the applicant result and deliberate answer confirmation.

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
- Every narration cue now contains approximately 300 ms of leading silence and 350 ms of trailing silence. This gives mobile browsers a safe seek margin and prevents the opening or closing syllable being clipped.
- Image-only recognition questions narrate the question without reading descriptive option labels. The recording therefore cannot reveal which image is correct.

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
- The applicant completion panel explicitly displays the selected position and whether the applicant is open to another listed position.

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

## 6. Deliberate answer confirmation

- Both the optional work-style section and the timed trade assessment now use a two-step interaction: select an option, then choose **Confirm final answer**.
- A selection may be changed freely until it is confirmed.
- The confirmation control remains disabled until an option is selected.
- Timed questions still time out at zero if the selected answer has not been confirmed.
- Every new work-style question clears the prior selection, highlight, focus state and confirmation state.
- Scoring, answer mappings, question order and timers remain unchanged.

## 7. Responsive and presentation refinements

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
- The applicant result shows the chosen position and alternate-position preference.
- Submission requires the administrator PIN and is not automatic.
- Stored applicants can be selected by name/code and decoded.
- The administrator report includes submitted application credentials.
- Selecting an answer does not save or advance until **Confirm final answer** is used.
- Each new work-style question has no preselected or highlighted answer.
- Image-only answer descriptions are not spoken and cannot reveal the answer.
- Each narration cue has a safe leading and trailing margin and remains within its audio file.
- Existing installations request the v21 files and narration cache rather than stale cue or interaction logic.
