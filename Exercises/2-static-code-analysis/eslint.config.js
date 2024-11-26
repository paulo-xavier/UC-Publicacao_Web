module.exports = [
    {
        files: ["**/*.js"],
        rules: {
            semi: "error",  // Rule to enforce semicolons at the end of statements
            "prefer-const": "error"  // Rule to prefer using `const` instead of `let` for variables that are never reassigned
        }
    }
];
