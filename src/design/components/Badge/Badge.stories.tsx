import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Button from "./index";
import { ButtonSize, ButtonVariant } from "./type";

const meta: Meta<typeof Button> = {
  title: "Components/Badge", // sidebar group
  component: Button,
  argTypes: {
    size: {
      control: "select",
      options: [ButtonSize.sm, ButtonSize.md, ButtonSize.lg, ButtonSize.xl],
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
