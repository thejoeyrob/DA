# Danco Applicant Assessment — v23 implementation brief

## Outcome

This release retains the device-independent recorded narration and administrator-controlled Application mode, restores the accessibility-support reason and assistance, and adds secure cross-device submission and administrator review.

The applicant interface remains a static GitHub Pages Progressive Web App. A separate protected live service stores deliberately submitted records so the administrator list is shared between authorised devices.

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

## 4. Applicant reference and deliberate submission

- Application mode no longer displays the encoded DRA assessment code.
- The live service returns a normal opaque **Application reference** after successful submission.
- The encoded code remains internal for compatibility and remains visible in assessment-only prototype mode for manual cross-device testing.
- A completed application is not automatically stored.
- **Submit application for review** opens a confirmation dialog and requires the administrator PIN.
- Assessment-only results can also be deliberately submitted to the same shared review list.
- Only a successful PIN-confirmed submission enters the shared database.
- Re-submitting the same completed result updates the existing record instead of creating a duplicate.
- A local copy of up to 100 submitted records is retained as a connection fallback; the live database is the source for cross-device review.
- The applicant completion panel explicitly displays the selected position and whether the applicant is open to another listed position.

## 5. Shared administrator database

The administrator dashboard retrieves submitted application and assessment-only records from the live service on every authorised phone, tablet or computer. It provides three queues:

- **Yet to process** — new records requiring attention
- **Actioned** — records that have been reviewed or progressed
- **Archived** — retained records removed from the working queue

Each queue selector identifies:

- applicant name
- normal submission reference
- application or assessment-only record type
- desired role when supplied

Selecting a record and choosing **Open full result**:

- retrieves the private assessment record from the protected service
- shows the job-applicant credentials in a dedicated section
- shows role alignment, tier scores, work-style guidance and question breakdown
- supports the existing print/save-PDF report
- allows an administrator to move the record between the three queues

The administrator PIN is checked by the live service before any list, full record or queue update is returned. The public service landing page never exposes applicant information. This is suitable for controlled prototype testing; production recruitment should additionally use approved identity management, retention rules, audit logging and organisational privacy review.

## 6. Deliberate answer confirmation

- Both the optional work-style section and the timed trade assessment now use a two-step interaction: select an option, then choose **Confirm final answer**.
- A selection may be changed freely until it is confirmed.
- The confirmation control remains disabled until an option is selected.
- Timed questions still time out at zero if the selected answer has not been confirmed.
- Every new work-style question clears the prior selection, highlight, focus state and confirmation state.
- Scoring, answer mappings, question order and timers remain unchanged.

## 7. Restored accessibility support

- Choosing audio support now asks whether it is for reading support, sight support or a general spoken-guidance preference.
- Reading and sight support add 15 seconds to every answer phase, in addition to the existing narration allowance.
- Reading and sight support also display a direct **Repeat question** control throughout the timed assessment.
- Repeating an image-only recognition question does not read descriptive option labels or reveal the answer.
- The encoded result retains the selected support reason without changing the result-code format.
- The administrator report identifies reading support, sight support or general spoken guidance and states which assistance was enabled.

## 8. Responsive and presentation refinements

- Added responsive two-column/one-column application fields.
- Added polished administrator mode and submission panels.
- Added a printable job-applicant details section.
- Maintained viewport width constraints to prevent side-to-side page movement.
- Preserved paired-character grid placement so the male and female helpers remain side by side without overlap.
- Preserved the small white creator mark and surface-aware prototype watermarks.
- Added responsive shared-queue controls without widening the page or introducing horizontal movement.

## Preserved behaviour

The following are unchanged:

- language selection and bilingual assessment content
- optional five-question work-style section
- all ten knowledge questions, answer mappings and randomised display order
- review/answer timers and timeout behaviour
- trial codes, owner access, administrator PIN and trial-use limits
- result-code version, encoding and decoding for internal compatibility and manual assessment-only testing
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

The live storage service is deployed separately; no backend folders need to be uploaded to the GitHub Pages repository.

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
- Application mode never displays the internal DRA result code.
- Successful submission returns and displays a normal application reference.
- The applicant result shows the chosen position and alternate-position preference.
- Submission requires the administrator PIN and is not automatic.
- Application and assessment-only records can be retrieved on another device using the administrator dashboard.
- Administrators can move shared records between Yet to process, Actioned and Archived queues.
- Shared records can be selected by name/reference and opened without an encoded code.
- The administrator report includes submitted application credentials.
- Selecting an answer does not save or advance until **Confirm final answer** is used.
- Each new work-style question has no preselected or highlighted answer.
- Image-only answer descriptions are not spoken and cannot reveal the answer.
- Each narration cue has a safe leading and trailing margin and remains within its audio file.
- Audio support asks for and retains the applicant's support reason.
- Reading and sight support provide additional answer time and direct question repetition.
- The administrator report states the selected support reason and assistance provided.
- Existing installations request the v23 files and cache rather than stale local-only logic.
