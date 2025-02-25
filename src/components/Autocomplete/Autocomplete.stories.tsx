import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { DESCRIPTIONS } from "./constants";
import Autocomplete from "./Autocomplete";
import { AutocompleteProps } from "./Autocomplete.types";

const meta = {
    title: "Components/Autocomplete",
    component: Autocomplete,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: DESCRIPTIONS.component,
            },
        },
    },
    argTypes: {
        value: {
            control: "text",
            description: DESCRIPTIONS.argTypes.value,
        },
        placeholder: {
            control: "text",
            description: DESCRIPTIONS.argTypes.placeholder,
        },
        suggestions: {
            control: "multi-select",
            description: DESCRIPTIONS.argTypes.suggestions,
        },
        className: {
            control: "text",
            description: DESCRIPTIONS.argTypes.className,
        },
        onChange: {
            description: DESCRIPTIONS.argTypes.onChange,
        },
        resetValue: {
            description: DESCRIPTIONS.argTypes.resetValue,
        },
    },
    render: function Render(args: AutocompleteProps) {
        const [{ value }, updateArgs] = useArgs();

        return (
            <Autocomplete
                {...args}
                value={value}
                onChange={(newValue) => updateArgs({ value: newValue })}
                resetValue={() => updateArgs({ value: "" })}
            />
        );
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: "",
        placeholder: "Search for a country",
        suggestions: [
            "United States",
            "Canada",
            "United Kingdom",
            "Australia",
            "Germany",
            "France",
            "Japan",
            "China",
            "Brazil",
            "India"
        ],
        className: "",
        onChange: () => {},
        resetValue: () => {},
    },
};

export const WithValue: Story = {
    args: {
        value: "Unit",
        placeholder: "Search for a country",
        suggestions: [
            "United States",
            "United Kingdom",
            "United Arab Emirates",
            "Canada",
            "Australia",
            "Germany",
            "France",
            "Japan",
            "China",
            "Brazil",
            "India"
        ],
        className: "",
        onChange: () => {},
        resetValue: () => {},
    },
};