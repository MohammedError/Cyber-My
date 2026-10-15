# Portfolio content sources and decisions

Reviewed against the original default-branch commit `4ee8811d437f03486311ffe1573beca5f86171b7`. All original repository text files, both CV PDFs and GIF assets were inspected before editing. Website copy is not treated as independent evidence.

## Primary personal source

The user supplied `MohammedRu.pdf` and explicitly requested replacing the existing downloadable CV. It is copied byte-for-byte into the existing `assets/CVmohaamed.pdf` URL. SHA-256: `1a56a195c067285607b81e3da438ab5682029a34e49c7ee1a46672cea2572256`.

The supplied CV supports the full name, email, Riyadh location, qualifications, IT support training duties, Holberton dates, academic forensics project, foundational security topics and four listed credentials. These credentials are CV-reported; no issuer verification links or certificate images were supplied. The downloadable CV includes the user's own contact details; phone and WhatsApp links are omitted from the website UI.

## Explicit user corrections

During this task the user corrected the training organization to **Emirate of Madinah Province** and confirmed both degree and diploma education in **Madinah**. These corrections override the old website's Al-Awali Municipality, University of Tabuk and Riyadh education location.

The user separately confirmed **linkedin.com/in/mohsecur/** as the current LinkedIn profile and explicitly instructed keeping the supplied PDF unchanged. Therefore the PDF retains its original employer wording, **Al Madinah Projects**, while website training uses the user's corrected employer. This is an intentional source discrepancy disclosed to the user, not an inferred equivalence between the organizations.

The supplied CV names TVTC; its Madinah location follows the user's correction and the earlier CV's College of Technology at Medina. Degree field and graduation year agree across CVs. Detailed dates shown follow the supplied CV where there is no competing date: bachelor's Feb 2022–Feb 2025, training Jan–Sep 2022, Holberton Oct 2025–Jul 2026. Holberton is described as a foundational program, without claiming a degree or verified completion certificate.

## Public project evidence

Only public source was used for the three detailed case studies. Projects were reviewed at the refs below; links to specific contributions are included on the website. Source inspection is evidence of implementation, not an independent runtime/security audit.

| Case study | Evidence | Role and limits |
| --- | --- | --- |
| Network diagnostics lab | [Repository](https://github.com/MohammedError/holbertonschool-network), reviewed at `c39d1d44bdc603f9e570fa03db43fff2a4a39969`; [Docker hosts-file fix](https://github.com/MohammedError/holbertonschool-network/commit/a8056dae30eeb721c81a4252ea50a1f7c9aca7b6) | Individual curriculum exercises: Bash, netstat, ping, IPv4 inspection and local netcat listener. No production network defense claim. |
| Linux shell and permissions | [Repository](https://github.com/MohammedError/holbertonschool-shell), reviewed at `7a25d808c381674a079dd6075547af8cd815fbdf`; [conditional ownership exercise](https://github.com/MohammedError/holbertonschool-shell/blob/main/permissions/16-if_only) | Individual curriculum scripts for permissions, ownership, variables and text processing. |
| HBnB API authorization | [Repository](https://github.com/MohammedError/holbertonschool-hbnb); [JWT identity and review ownership](https://github.com/MohammedError/holbertonschool-hbnb/commit/e78727ef7e7949f957cc7d27205e5e9187f16e01); [admin checks](https://github.com/MohammedError/holbertonschool-hbnb/commit/bfc8ebc533d85e563d96c2fdcb8402961549eb9f); [relationships](https://github.com/MohammedError/holbertonschool-hbnb/commit/86df129ea878000c9a8ca692031ebc2425871676) | Collaborative curriculum application. Personal commits support the limited contribution described; not sole authorship or production readiness. No working public demo verified. |

The forensics graduation project is briefly attributed to the CV as academic work. No sensitive case materials, invented screenshot, real-world criminal investigation role or unsupported outcome is presented.

Other repositories and project descriptions were considered. SelfLab lacked accessible source/demo evidence for a detailed case study; team-portfolio-project primarily contained planning material; the CV's AEGIS claims were not promoted without independently reviewable public project evidence. No private repository contents are copied or exposed.

## Skill levels

- Practical training: Windows/software troubleshooting, workstation setup, hardware/peripheral support and basic connectivity — supplied CV experience.
- Applied learning: Bash/Linux/network diagnostic commands, Python/Flask/SQLAlchemy, Git and web technologies — public source and personal contributions above.
- Academic application: FTK Imager and Autopsy — supplied CV graduation project.
- Foundational knowledge: SIEM concepts, breach analysis, vulnerability/web assessment, NIST CSF, NIST SP 800-53 and cloud fundamentals — supplied CV/coursework/credentials. No named SIEM platform or professional operational proficiency is inferred.

## Held out pending evidence

- Diploma start year: supplied CV says Jan 2019; old site says 2020. Only the agreed completion year **2022** is displayed.
- Old Udemy SOC Analyst/network security “internship” and operational alert-monitoring duties: unsupported by either CV. SOC/defensive security are interests, not previous employment.
- Oracle, LinkedIn network-security and edX credentials found only in old website copy: held out until evidence is supplied.
- Language fluency and old numerical/proficiency claims: no reliable level asserted.
- Certificate verification links/images, academic project report/screenshots and the mentioned trainee portfolio guide: not available in the task's supplied files.

## Runtime and contact decisions

The existing Web3Forms access key was evaluated against [official provider documentation](https://docs.web3forms.com/getting-started/faq): it is intended public client configuration, not a secret. Form routing/ownership and delivery could not be validated; the terminal also canceled submissions without sending. Both forms were replaced with direct email links. No contact messages were sent and no credential rotation was represented as performed.

No additional obvious real credentials/private keys were found in the original website source. New pages contain no service tokens, analytics or external frontend libraries. Nonexistent audio references, blocking loader, WebGL/particle/firework dependencies and unsourced role rotations were removed.

Original GIF assets and repository history remain retained. The optional terminal is preserved as a portfolio interface and reads the main page content. English is kept throughout; no partial Arabic localization is introduced.

## Deployment

The repository metadata reports GitHub Pages enabled, with the existing live URL and successful dynamic Pages build/deployment on the original head. There is no tracked build workflow or application dependency manifest. Relative paths and buildless static HTML/CSS/JS are preserved. Changes are proposed on a separate branch/PR; repository visibility, access and Pages configuration are unchanged.
