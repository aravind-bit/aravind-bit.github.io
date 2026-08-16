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
- `textent/assets/aws/` contains the local AWS architecture icons.
- `textent/assets/textent-case-study-social.png` is the sharing preview.

## Recruiter attention and visual rules

- Keep one connected narrative: the review problem, differentiated product and
  enterprise direction, connected target architecture, then evidence boundary.
- Target roughly three desktop screen lengths; do not restore long standalone
  sections for every design topic.
- Maintain the 60/30/10 palette: warm neutral surfaces, deep navy structure,
  and emerald accents. Avoid introducing a competing saturated color without
  explicit approval.
- Lead every technical area with the business or operating decision it enables.
- Do not add an elaborate synthetic product interface. Explain Reuse, Compare,
  and Decide in concise text so the page is not mistaken for a functioning app.
- Keep the AWS diagram conceptual but connected from authorized sources through
  intake, orchestration, bounded model use, validation, and human disposition.
- Preserve the enterprise differentiation: OneDrive, SharePoint, Teams, Slack,
  inherited permissions, structure-aware chunking, hybrid retrieval and
  reranking, evidence-backed RAG, version comparison, document-native revision,
  approval, retention, and audit trail. Mark all conditional capabilities as
  not implemented.

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

The resume hyperlink target must remain
`https://aravind-bit.github.io/textent/`, but its visible text should be the
product name **Textent**, not the GitHub Pages hostname.

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

Do not add a promotional marquee-client banner above the experience section.
FAA, Cisco, and Kaiser Permanente should appear in their defensible program or
client-engagement headings, with the legal employers stated accurately.

## Required website checks

Before every publication:

1. Serve the repository locally.
2. Render the portfolio and `/textent/` at desktop and mobile widths.
3. Check horizontal overflow, missing images, internal anchors, empty links,
   and console errors.
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
