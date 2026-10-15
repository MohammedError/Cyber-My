(() => {
    'use strict';

    const output = document.getElementById('terminal-output');
    const status = document.getElementById('command-status');
    const form = document.getElementById('command-form');
    const input = document.getElementById('command-input');
    const commandButtons = document.querySelectorAll('[data-command]');
    const helpContent = output.firstElementChild.cloneNode(true);
    const sections = {
        profile: { id: 'about', label: 'Profile' },
        skills: { id: 'skills', label: 'Skills' },
        projects: { id: 'projects', label: 'Projects' },
        education: { id: 'education', label: 'Education' },
        experience: { id: 'experience', label: 'Experience and training' },
        certs: { id: 'certifications', label: 'Certificates and learning' },
        contact: { id: 'contact', label: 'Contact' }
    };
    let sourcePromise;
    let latestCommand = 0;

    function setStatus(message) {
        status.textContent = message;
    }

    function createLink(label, href, download) {
        const link = document.createElement('a');
        link.textContent = label;
        link.href = href;
        link.className = 'inline-link';
        if (download) link.download = download;
        return link;
    }

    function showMessage(title, message, link) {
        const section = document.createElement('section');
        const heading = document.createElement('h2');
        heading.textContent = title;
        const paragraph = document.createElement('p');
        paragraph.textContent = message;
        section.append(heading, paragraph);
        if (link) section.append(link);
        output.replaceChildren(section);
    }

    function getPortfolio() {
        if (!sourcePromise) {
            sourcePromise = fetch('index.html', { credentials: 'same-origin' })
                .then(response => {
                    if (!response.ok) throw new Error('Portfolio content unavailable');
                    return response.text();
                })
                .then(html => new DOMParser().parseFromString(html, 'text/html'))
                .catch(error => {
                    sourcePromise = null;
                    throw error;
                });
        }
        return sourcePromise;
    }

    function prepareSection(sourceSection) {
        const section = sourceSection.cloneNode(true);
        // Reuse the authoritative public portfolio text without executing its scripts.
        section.querySelectorAll('script, iframe, audio, video, canvas, form').forEach(node => node.remove());
        [section, ...section.querySelectorAll('*')].forEach(node => {
            [...node.attributes].forEach(attribute => {
                if (attribute.name.startsWith('on')) node.removeAttribute(attribute.name);
            });
            node.removeAttribute('style');
            node.removeAttribute('hidden');
            node.removeAttribute('inert');
            if (node instanceof HTMLAnchorElement) {
                const href = node.getAttribute('href');
                if (href && href.startsWith('#')) node.setAttribute('href', `index.html${href}`);
                if (href === 'assets/CVmohaamed.pdf') node.download = 'MohammedRu.pdf';
            }
        });
        return section;
    }

    async function runCommand(rawCommand) {
        const command = rawCommand.trim().toLowerCase();
        const commandId = ++latestCommand;
        output.setAttribute('aria-busy', 'false');
        commandButtons.forEach(button => {
            if (button.dataset.command === command) button.setAttribute('aria-current', 'true');
            else button.removeAttribute('aria-current');
        });

        if (!command || command === 'help') {
            output.replaceChildren(helpContent.cloneNode(true));
            setStatus('Help displayed. Choose a command above.');
            return;
        }
        if (command === 'clear') {
            output.replaceChildren();
            setStatus('Panel cleared. Choose help or another command to continue.');
            return;
        }
        if (command === 'cv') {
            showMessage('Download the CV', 'The PDF opens through a direct download link.',
                createLink('Download CV (PDF)', 'assets/CVmohaamed.pdf', 'MohammedRu.pdf'));
            setStatus('CV download link displayed.');
            return;
        }
        if (!Object.hasOwn(sections, command)) {
            showMessage('Command not found', 'Use one of the listed portfolio commands, or enter help.');
            setStatus(`Unknown command: ${command}. Enter help to see available commands.`);
            return;
        }

        const selection = sections[command];
        output.setAttribute('aria-busy', 'true');
        setStatus(`Loading ${selection.label.toLowerCase()}…`);
        try {
            const portfolio = await getPortfolio();
            if (commandId !== latestCommand) return;
            const sourceSection = portfolio.getElementById(selection.id);
            if (!sourceSection) throw new Error('Section unavailable');
            output.replaceChildren(prepareSection(sourceSection));
            setStatus(`${selection.label} displayed. Portfolio content below.`);
        } catch {
            if (commandId !== latestCommand) return;
            showMessage('Open the main portfolio',
                'This view could not load the requested section. You can read it in the main portfolio.',
                createLink(`Open ${selection.label.toLowerCase()}`, `index.html#${selection.id}`));
            setStatus('Content could not be loaded. A main portfolio link is available below.');
        } finally {
            if (commandId === latestCommand) output.setAttribute('aria-busy', 'false');
        }
    }

    commandButtons.forEach(button => button.addEventListener('click', () => runCommand(button.dataset.command)));
    form.addEventListener('submit', event => {
        event.preventDefault();
        runCommand(input.value);
        input.value = '';
    });
})();
