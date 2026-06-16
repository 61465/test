const fs = require('fs');

// Mock browser globals
global.window = {
    addEventListener: () => {}
};

const mockElement = {
    style: {},
    classList: {
        add: () => {},
        remove: () => {}
    },
    setAttribute: () => {},
    getAttribute: (attr) => {
        if (attr === 'data-i18n') return 'nav_title';
        if (attr === 'data-i18n-placeholder') return 'chat_placeholder';
        return '';
    },
    querySelector: () => mockElement,
    querySelectorAll: () => [mockElement],
    appendChild: () => {},
    addEventListener: () => {}
};

global.document = {
    documentElement: { style: {} },
    body: { style: {} },
    getElementById: (id) => {
        return {
            ...mockElement,
            innerText: '',
            innerHTML: '',
            textContent: '',
            style: {},
            className: ''
        };
    },
    querySelectorAll: (selector) => {
        return [mockElement];
    }
};

try {
    const code = fs.readFileSync('temp_asaa.js', 'utf8');
    // Append bindings to export variables from eval scope
    const bindCode = code + `
        global.toggleLanguage = toggleLanguage;
        global.updateHarness3D = updateHarness3D;
        global.switchScenario = switchScenario;
        global.toggleModality = toggleModality;
    `;
    eval(bindCode);
    
    console.log('Testing toggleLanguage()...');
    global.toggleLanguage();
    console.log('toggleLanguage() executed successfully.');

    console.log('Testing updateHarness3D()...');
    global.updateHarness3D();
    console.log('updateHarness3D() executed successfully.');

    console.log('Testing switchScenario("stripe")...');
    global.switchScenario('stripe');
    console.log('switchScenario() executed successfully.');

    console.log('Testing toggleModality("conductor")...');
    global.toggleModality('conductor');
    console.log('toggleModality() executed successfully.');

} catch (error) {
    console.error('RUNTIME INTERACTION ERROR:', error);
}
