import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/test';
import { Button, ButtonProps } from './Button';
import { TrashIcon } from '@/icons/TrashIcon';
import { PlusIcon } from '@/icons/PlusIcon.';

// Définir les métadonnées du composant
const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    type: {
      control: {
        type: 'select',
        options: ['append', 'remove'],
      },
    },
    icon: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
  },
};

export default meta;

// Créer un template de story
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;


export const Default = Template.bind({});
Default.args = {
  type: 'append',
  text: 'Default Button',
};


Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button', { name: /Default Button/i });

  await expect(button).toBeInTheDocument();
  await userEvent.click(button);
};


export const ButtonIcon = Template.bind({});
ButtonIcon.args = {
  type: 'append',
  icon: <PlusIcon />,
};


ButtonIcon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');

  await expect(button).toBeInTheDocument(); // Vérifie que le bouton est présent
  await userEvent.click(button);
};
