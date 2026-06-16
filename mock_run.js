const fs = require('fs');

// Mock browser globals
global.window = {
    addEventListener: (event, cb) => {
        if (event === 'DOMContentLoaded') {
            global.domContentLoadedHandler = cb;
        }
    }
};

const mockElement = {
    style: {},
    classList: {
        add: () => {},
        remove: () => {}
    },
    setAttribute: () => {},
    getAttribute: () => '',
    querySelector: () => mockElement,
    querySelectorAll: () => [],
    appendChild: () => {},
    addEventListener: () => {}
};

global.document = {
    documentElement: { style: {} },
    body: { style: {} },
    getElementById: (id) => {
        // Return a mock element with properties to prevent null pointers
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
        return [];
    }
};

try {
    const code = fs.readFileSync('temp.js', 'utf8');
    // Run the code
    eval(code);
    console.log('Script loaded successfully without immediate runtime errors.');
    
    // Simulate DOMContentLoaded event
    if (global.domContentLoadedHandler) {
        console.log('Simulating DOMContentLoaded...');
        global.domContentLoadedHandler();
        console.log('DOMContentLoaded executed successfully.');
    } else {
        console.warn('DOMContentLoaded handler not found!');
    }
} catch (error) {
    console.error('RUNTIME ERROR:', error);
}
