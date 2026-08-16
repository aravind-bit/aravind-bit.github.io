# Portfolio publication record

## Release purpose

Reposition the public portfolio toward Data and AI Solutions Architecture and
add a recruiter-facing Textent product-architecture case study at:

`https://aravind-bit.github.io/textent/`

## Public changes

- Replaced the older Data Engineer portfolio narrative with a Data Analytics
  Lead and Data and AI Solutions Architecture narrative.
- Added a prominent Textent section to the portfolio homepage.
- Added the self-contained `/textent/` case study with responsive HTML, CSS,
  JavaScript interaction, official AWS architecture icons, and a social preview
  image.
- Added the current resume in PDF and DOCX formats and removed superseded public
  resume files.
- Tightened page and section spacing so recruiters can scan more information
  with less scrolling.
- Updated page metadata, navigation, accessibility labels, and the repository
  README.

## Public-information boundary

The publication contains a synthetic document-review scenario and a conceptual,
career-safe reference architecture. It does not publish:

- private Textent source code or repository contents;
- prompts, schemas, internal implementation instructions, or private documents;
- AWS account identifiers, ARNs, resource names, credentials, or secret values;
- customer, tester, employer, or production document data;
- private product endpoints, access controls, or deployment topology; or
- fabricated customers, production traffic, performance, accuracy, savings, or
  launch claims.

Architecture is labeled as designed rather than deployed. Conditional product
direction is labeled as not implemented.

## Validation completed before publication

- Desktop render at 1440 pixels.
- Mobile render at 390 pixels.
- No horizontal overflow.
- One H1 per page.
- No missing images, internal-anchor targets, or empty links.
- No browser console or JavaScript errors.
- Textent synthetic interaction changes the selected review finding correctly.
- Resume PDF returns successfully from the local site.
- Resume DOCX rendered to two clean US Letter pages.
- Resume accessibility audit returned no findings.
- Public-file scan found no AWS account IDs, ARNs, private endpoints, internal
  filesystem paths, or common credential patterns.

## Publishing path

GitHub Pages publishes from `main` at the repository root. The portfolio is
reviewed on a branch, merged through a pull request, and then verified at the
live URLs.

## Rollback

Revert the publication merge commit and allow GitHub Pages to rebuild. Do not
delete history or force-push `main`.

## 2026-08-16 recruiter-attention revision

- Reduced the Textent case study from six standalone presentation sections to
  three narrative acts: product experience, target architecture, and evidence
  boundary.
- Reduced the desktop page from approximately 7,180 to approximately 3,141
  pixels at the 1440-by-1000 review viewport—about three screen lengths.
- Replaced the yellow status panel and competing accent colors with a 60/30/10
  system: warm neutral surfaces, deep navy structure, and emerald emphasis.
- Condensed the AWS diagram while retaining official service icons, workload
  flow, cross-cutting controls, and the conditional enterprise retrieval path.
- Regenerated the 1200-by-630 social preview from the revised hero.
- Removed the promotional FAA/Cisco/Kaiser banner from the resume. Client and
  program names remain in their accurate experience headings with legal
  employers preserved.
- Simplified Textent from four dense bullets to three evidence-bounded bullets
  and strengthened the Nexus Excel-automation bullet without inventing a
  percentage, volume, user count, or timing claim.
