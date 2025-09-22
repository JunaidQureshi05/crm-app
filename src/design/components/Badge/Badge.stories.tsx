import type { Meta, StoryObj } from "@storybook/react-webpack5";

import Badge from "./index";
import { Sizes, BadgeVariant } from "../../types";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    size: {
      control: "select",
      options: [Sizes.sm, Sizes.md, Sizes.lg],
    },
    variant: {
      control: "select",
      options: Object.values(BadgeVariant),
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    label: "Primary Badge",
    variant: BadgeVariant.primary,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Badge",
    variant: BadgeVariant.secondary,
  },
};

export const Info: Story = {
  args: {
    label: "Info Badge",
    variant: BadgeVariant.info,
  },
};

export const Success: Story = {
  args: {
    label: "Success Badge",
    variant: BadgeVariant.success,
  },
};

export const Warning: Story = {
  args: {
    label: "Warning Badge",
    variant: BadgeVariant.warning,
  },
};

export const Danger: Story = {
  args: {
    label: "Danger Badge",
    variant: BadgeVariant.dark,
  },
};
