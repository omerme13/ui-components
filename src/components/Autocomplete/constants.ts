export const DESCRIPTIONS = {
    component: `
        Autocomplete component provides users with suggested options as they type.
        It extends the functionality of the Input component by showing a dropdown of filtered suggestions
        based on the current input value.
    `,
    argTypes: {
        value: "The current value of the input",
        placeholder: "Placeholder text to display when the input is empty",
        suggestions: "Array of strings to use as autocomplete suggestions",
        className: "Additional CSS class names to apply to the component",
        onChange: "Function called when the input value changes or a suggestion is selected",
        resetValue: "Function called to reset the input value to empty string"
    }
};