# Cyber-My · Cyber-Ether

Personal technical portfolio for Mohammed Ali Salim Al-Oufi, a cybersecurity graduate interested in SOC, cyber defense and network security.

[Live GitHub Pages site](https://mohammederror.github.io/Cyber-My/) · [GitHub](https://github.com/MohammedError)

## Structure

- `index.html`: English portfolio, with background, three public educational project case studies, contextual skill levels, CV-reported credentials and email contact.
- `style.css` / `script.js`: responsive layout, keyboard focus, optional gentle motion and reduced-motion support. Content is visible without JavaScript.
- `kali.html` / `kali-style.css` / `kali-script.js`: optional portfolio terminal interface. It reads the main page so factual content stays consistent. It is an interface demo; it executes no OS or security commands.
- `assets/CVmohaamed.pdf`: supplied replacement CV. Existing URL preserved; downloads use the filename `MohammedRu.pdf`.
- `assets/orbit.svg`: local vector favicon.
- Original GIF assets are retained. They are not loaded by the revised pages.
- `docs/content-sources.md`: content evidence, user corrections and unresolved information.

## Run locally

No package manager, bundler, API keys or third-party frontend scripts are required.

```sh
python -m http.server 4173
```

Open `http://localhost:4173/`. Use HTTP rather than opening HTML as a local file so the optional terminal can fetch the main page.

## Deployment

Keep the current GitHub Pages branch/root configuration. All runtime assets and links are relative to this repository and work under `/Cyber-My/`; there is no client-side router or build step. Merge the reviewed portfolio branch into `main` to publish through the existing Pages process. The live site reflects the deployed default branch, not an unmerged pull request.

## Content and privacy

Projects are scoped as educational work. Public code supports the stated contributions; no production deployment, security certification of the apps or numerical impact is claimed. SOC is a career interest, not a prior job.

Only qualifications supported by the supplied CV are listed. Certificate verification URLs and images have not been supplied. Disputed or unsupported old claims are held out of the website; see the evidence notes.

Contact uses a direct email link. The old Web3Forms access key is intended public frontend configuration according to [the provider's FAQ](https://docs.web3forms.com/getting-started/faq), not a secret API key. The form was replaced because its delivery settings could not be verified and the terminal's old form did not submit. No messages were sent during testing. No phone/WhatsApp/social links beyond the professional sources are added to the page. The user-supplied CV contains its own contact details.

## Validation

See the pull request for the exact checks and results. Browser checks cover desktop and narrow mobile layouts, anchors and navigation, downloads, keyboard focus, motion preferences, JavaScript-disabled reading, the terminal, local assets, browser errors and basic automated accessibility.
