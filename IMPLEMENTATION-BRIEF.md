# Danco Applicant Assessment — implemented change brief

## Objective

Apply six isolated improvements to the current working assessment without altering its assessment flow, scoring, access controls, result-code format or administration functions.

## Implemented changes

1. **Setup action label**
   - English: `Begin beginner assessment` → `Begin assessment`
   - Spanish equivalent: `Comenzar evaluación para principiantes` → `Comenzar evaluación`

2. **Rendered answer-option imagery**
   - Replaced all 20 remaining diagram/geometry-style assets with fully rendered, recognisable 800 × 520 PNG images.
   - Replaced groups:
     - roof-access ladder heights: four images
     - TPO inspection tools: four images
     - dirty TPO lap actions: four images
     - lifting signal-person choices: four images
     - wind-uplift fastening zones: four images
   - Existing clear membrane product and mechanically attached TPO seam images were retained.
   - Filenames and question references were preserved, so the question bank and answer mapping did not change.

3. **Speech voice preference logic**
   - English first preference: `en-US`, with known American male and natural/neural voice names ranked highest.
   - Spanish first preference: `es-US`, with known American/Latin American Spanish female and natural/neural voice names ranked highest.
   - Spanish fallback order favours other Latin American Spanish locales before general Spanish voices.
   - English fallback order favours US/Canadian English before other English voices.
   - If a matching named voice is not installed, the app uses the best available voice for the selected language; if no voice list is exposed, the browser/device default speaks with the requested language code.
   - Voice lists are refreshed when the browser fires `voiceschanged`, covering devices that load voices asynchronously.

4. **Offline refresh**
   - Updated the service-worker cache identifier so existing installations request the revised code and image assets after deployment.

5. **Side-by-side character placement**
   - Replaced overlapping paired-character compositions with dedicated side-by-side columns.
   - Applied the same non-overlap rule to the welcome view, setup and instruction guide panels, help drawer and mobile result screen.
   - The selected-language helper retains visual emphasis without covering the second helper.
   - The assessment flow, helper-language switching and character source files remain unchanged.

6. **Creator credit and supplied logo**
   - Added the exact credit `Design & Production by` with the supplied Joseph Whelan EDS logo in the bottom-right corner.
   - Removed the source JPEG's white background and converted the mark to a transparent, all-white PNG for placement over the app colour.
   - Kept the credit intentionally small, low-opacity and non-interactive so it has minimal visual impact and cannot block controls.
   - Added the new transparent logo asset to the offline service-worker cache.

## Preserved working behaviour

The following were deliberately left unchanged:

- 3-step applicant flow and all screen transitions
- optional 5-question work-style section
- 10-question assessment order, wording, timers and correct-answer indexes
- randomised answer display order
- English/Spanish switching
- prototype lock, owner access and all trial-code hashes/use limits
- existing local-storage keys and remaining trial-use data
- result-code version, encoding/decoding and administrator dashboard
- applicant result privacy, reset behaviour and printable administrator report
- fullscreen behaviour, PWA manifest and GitHub Pages flat-file structure
- mascot, brand, email and existing clear roofing assets
- all existing Danco branding and helper character artwork

## Acceptance checks

- No visible occurrence of `Begin beginner assessment` remains.
- Every referenced answer image exists, decodes as a valid PNG and uses the expected aspect ratio.
- Every visual question still has four options and the same correct answer index.
- English voice ranking selects a natural American male candidate when one is available.
- Spanish voice ranking selects a natural `es-US` female candidate when one is available.
- Voice selection falls back to another matching-language voice without blocking speech.
- Static PWA files remain root-relative and suitable for direct GitHub Pages hosting.
- Every paired full-character presentation uses separate grid columns with no negative offsets or shared absolute positioning.
- The creator credit reads `Design & Production by`, uses the supplied logo as a transparent white PNG and remains below interactive UI layers.
