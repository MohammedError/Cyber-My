# Portfolio validation

Tested using the installed Microsoft Edge in headless mode via bundled Playwright. Automated accessibility checks used axe-core 4.14.0 against WCAG 2 A/AA and WCAG 2.1 A/AA tags. This is basic automated coverage, not a complete accessibility certification.

## Main page

Viewports: 1440, 1024, 768, 390 and 320 pixels wide.

- No horizontal overflow; all navigation remains available on mobile.
- All internal anchor targets exist; main navigation scrolls sections below the sticky header.
- One page h1, unique IDs, descriptive links and visible keyboard focus/skip link.
- Zero axe WCAG A/AA violations in the tested rendered states.
- Zero browser JavaScript or console errors; zero failed runtime asset responses.
- CV download succeeds with filename MohammedRu.pdf and bytes matching the supplied file exactly.
- Motion defaults off. Optional motion can be stopped. Reduced-motion system preference prevents animation.
- Main content, navigation, project cases and CV links remain visible with JavaScript disabled.
- Desktop and mobile screenshots were visually inspected.

## Optional terminal

Tested all content commands at 320, 375 and 1440 pixels; axe checked nine command states at 320 and 1440 pixels.

- Commands display the shared main-page content rather than duplicated facts.
- Keyboard buttons, typed commands/Enter, clear/help, direct CV link and cross-page fragments work.
- Failed content loading shows a usable main-page link and can be retried.
- Out-of-order responses do not replace a newer command; clear remains cleared while a previous fetch finishes.
- Unknown HTML-like input is treated as text.
- No overflow, JavaScript errors, or third-party audio/library dependencies.
- With JavaScript disabled, visible links lead to the main portfolio and CV.
- Zero axe WCAG A/AA violations in the tested command states.

## Links and deployment compatibility

- Every referenced local runtime file exists.
- All seven distinct GitHub profile/repository/contribution links returned HTTP 200.
- LinkedIn returned HTTP 999 (automated access restriction). The user explicitly confirmed the current mohsecur profile; independent automated page-content verification is unavailable.
- Existing live GitHub Pages URL returned HTTP 200.
- The existing dynamic Pages workflow was enabled and its latest observed deployment succeeded for original commit 4ee8811d437f03486311ffe1573beca5f86171b7.
- Local browser tests used the repository prefix /Cyber-My/, matching the existing Pages URL. No bundler, server runtime, API key or root-absolute asset path is needed.
- New source remains on the PR branch until merged. A new production Pages deployment cannot be confirmed before that merge.

## Source and privacy checks

JavaScript syntax checks passed for both scripts. Final runtime source scan found no obvious service credentials/private keys, old form endpoint/access key, missing audio references or external JS/CSS dependencies. No form messages were sent. Repository visibility, collaborators, Pages settings, history and original GIF assets were preserved.

User-requested corrections and unresolved source discrepancies are documented in content-sources.md.
