// Replace your-framework with the name of your framework
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./DefaultButton";

import "../../app/globals.css";
import { TrashIcon } from "@/icons/TrashIcon";
import { PlusIcon } from "@/icons/PlusIcon.";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Append: Story = {
  render: (args, context) => <Button {...args} />,
  args: {
    type: "append",
    text: "Button append",
  },
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole("button", { name: /Button append/i });

    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
  },
};

export const IconAppend: Story = {
  render: (args, context) => <Button {...args} />,
  args: {
    type: "append",
    icon: <PlusIcon />,
  },
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
};

export const Remove: Story = {
  render: (args, context) => <Button {...args} />,
  args: {
    type: "remove",
    text: "Button remove",
  },
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
};

export const IconRemove: Story = {
  render: (args, context) => <Button {...args} />,
  args: {
    type: "remove",
    icon: <TrashIcon />,
  },
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
};
