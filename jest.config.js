const path = require('path');
require('dotenv').config({ path: '.env.local' });

module.exports = {
    testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
    moduleNameMapper: {
        "^@/(.*)$": path.join(__dirname, "app", "$1"),
    },
};
