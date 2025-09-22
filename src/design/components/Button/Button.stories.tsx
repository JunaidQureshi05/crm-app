import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Button from "./index";
import { Sizes, ButtonVariant } from "../../types";

const meta: Meta<typeof Button> = {
  title: "Components/Button", // sidebar group
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: [Sizes.sm, Sizes.md, Sizes.lg, Sizes.xl],
    },
    fullWidth: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    variant: ButtonVariant.primary,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    variant: ButtonVariant.secondary,
  },
};

export const Info: Story = {
  args: {
    label: "Info Button",
    variant: ButtonVariant.info,
  },
};

export const Success: Story = {
  args: {
    label: "Success Button",
    variant: ButtonVariant.success,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Button",
    variant: ButtonVariant.warning,
  },
};
