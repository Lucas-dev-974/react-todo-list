// Replace your-framework with the name of your framework
import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

import "../../app/globals.css";
import { TrashIcon } from "@/icons/TrashIcon";
import { PlusIcon } from "@/icons/PlusIcon.";
import { expect, userEvent, within } from "@storybook/test";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputText: Story = {
  render: (args, context) => <Input {...args} />,
  args: {
    placeholder: "input texte",
    value: "input texte",
  },
  parameters: {
    docs: {
      story: { autoplay: true },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByPlaceholderText("input texte");
  },
};
