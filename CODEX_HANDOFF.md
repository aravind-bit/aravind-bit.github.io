# Codex handoff - career portfolio and Textent case study

## Canonical public assets

- Portfolio: `https://aravind-bit.github.io/`
- Textent case study: `https://aravind-bit.github.io/textent/`
- Resume PDF: `/assets/resume/Aravind_Anisetti_Data_AI_Solutions_Architect.pdf`
- Resume DOCX: `/assets/resume/Aravind_Anisetti_Data_AI_Solutions_Architect.docx`

Do not reintroduce `textent.ai/case-study` unless that URL is independently
published, verified, and explicitly approved.

## Repository responsibilities

- `index.html` owns the main career narrative and Textent entry point.
- `styles/app.css` owns the responsive portfolio visual system.
- `scripts/main.js` owns theme behavior and lightweight interaction.
- `textent/index.html` owns the case-study narrative and metadata.
- `textent/case-study.css` owns the case-study presentation system.
- `textent/case-study.js` owns the synthetic review interaction.
- `textent/assets/aws/` contains the local AWS architecture icons.
- `textent/assets/textent-case-study-social.png` is the sharing preview.

## Truth and privacy rules

Keep the public material career-safe and synthetic.

Never publish private source code, internal documentation, prompts, schemas,
credentials, cloud identifiers, resource names, private endpoints, real
documents, tester data, employer-confidential details, or private repository
structure.

Use these claim levels consistently:

1. **Implemented and verified offline** only for behavior supported by retained
   evidence.
2. **Designed, not deployed** for the conceptual AWS reference architecture.
3. **Conditional, not implemented** for future enterprise capabilities.

Do not add customers, production traffic, measured accuracy, latency, savings,
revenue, product-launch status, or other outcomes without defensible evidence.

## Resume synchronization

The resume link and visible Textent URL must remain
`https://aravind-bit.github.io/textent/`.

When the resume changes:

1. Regenerate the DOCX from the retained career workspace builder.
2. Render every page and inspect the page images.
3. Run the document accessibility audit.
4. Verify hyperlinks in the DOCX relationship file.
5. Export the matching PDF.
6. Replace both files under `assets/resume/` in the same pull request.
7. Verify the PDF download from the locally served site and again after GitHub
   Pages publication.

Do not retain superseded resumes in public asset paths.

## Required website checks

Before every publication:

1. Serve the repository locally.
2. Render the portfolio and `/textent/` at desktop and mobile widths.
3. Check horizontal overflow, missing images, internal anchors, empty links,
   console errors, and the Textent interaction.
4. Scan public files for credential patterns, AWS identifiers, private URLs,
   internal filesystem paths, and accidental private documentation.
5. Confirm canonical and social metadata use the GitHub Pages URL.
6. Review the complete diff and stage only intended files.

## GitHub workflow

- Do not push directly to `main`.
- Create a focused branch and pull request.
- Keep force pushes and branch deletion disabled on `main`.
- Apply branch protection to administrators.
- Merge only after the intended diff and checks are reviewed.
- Verify GitHub Pages after the merge.
- Roll back with a normal revert commit rather than rewriting history.

## Safe future enhancements

- Add a short synthetic demonstration video only after checking that frames,
  filenames, metadata, and narration contain no private information.
- Update the social preview when the hero materially changes.
- Add new public projects only with verified live links and bounded claims.
- Keep Textent product-development work in private repositories; this repository
  contains only the public career case study.
