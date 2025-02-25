import type { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { DESCRIPTIONS } from "./constants";
import Input from "./Input";
import { InputProps } from "./Input.types";

const meta = {
    title: "Components/Input",
    component: Input,
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
        showClearButton: {
            control: "boolean",
            description: DESCRIPTIONS.argTypes.showClearButton,
        },
        className: {
            control: "text",
            description: DESCRIPTIONS.argTypes.className,
        },
        onChange: {
            description: DESCRIPTIONS.argTypes.onChange,
        },
        onClear: {
            description: DESCRIPTIONS.argTypes.onClear,
        },
        onFocus: {
            description: DESCRIPTIONS.argTypes.onFocus,
        },
        onKeyDown: {
            description: DESCRIPTIONS.argTypes.onKeyDown,
        },
    },
    render: function Render(args: InputProps) {
        const [{ value }, updateArgs] = useArgs();

        return (
            <Input
                {...args}
                value={value}
                onChange={(newValue) => updateArgs({ value: newValue })}
                onClear={() => updateArgs({ value: "" })}
            />
        );
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: "",
        placeholder: "Empty state example",
        showClearButton: true,
		onChange: () => {}
    },
};

export const Filled: Story = {
    args: {
        value: "Filled input example",
        placeholder: "Type something",
        showClearButton: true,
		onChange: () => {}
    },
};