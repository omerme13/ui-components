import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button";
import { DESCRIPTIONS } from "./constants";

const meta = {
    title: "Example/Button",
    component: Button,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: DESCRIPTIONS.component,
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color", description: DESCRIPTIONS.backgroundColor },
        primary: { description: DESCRIPTIONS.primary },
        label: { description: DESCRIPTIONS.label },
        onClick: { description: DESCRIPTIONS.onClick },
        size: { description: DESCRIPTIONS.size },
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        primary: true,
        label: "Button",
    },
};

export const Secondary: Story = {
    args: {
        label: "Button",
    },
};

export const Large: Story = {
    args: {
        size: "large",
        label: "Button",
    },
};

export const Small: Story = {
    args: {
        size: "small",
        label: "Button",
    },
};