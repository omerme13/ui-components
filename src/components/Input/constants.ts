export const DESCRIPTIONS = {
    component: `
		A customizable input component that supports:
        - Text input with controlled value
        - Optional clear button
        - Custom styling via className
        - Event handlers for onChange, onClear, onFocus, and onKeyDown
	`,
    argTypes: {
        value: "The current value of the input",
        onChange: "Callback fired when the input value changes",
        placeholder: "Placeholder text shown when input is empty",
        className: "Additional CSS class names",
        showClearButton: "When true, shows a clear button if input has value",
        onClear: "Callback fired when the clear button is clicked",
        onFocus: "Callback fired when input receives focus",
        onKeyDown: "Callback fired when a key is pressed",
    },
} as const;
