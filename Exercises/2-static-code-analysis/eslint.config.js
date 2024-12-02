module.exports = [
    {
        files: ["**/*.js"],
        ignores: ["**/*.config.js"], //Files to be ignored
        rules: {
            semi: "error",  // Rule to enforce semicolons at the end of statements
            "prefer-const": "error",  // Rule to prefer using `const` instead of `let` for variables that are never reassigned
            "no-console": [2] // Turns the rule on, and ESLint will emit errors when the rule is violated
        }
    }
];
