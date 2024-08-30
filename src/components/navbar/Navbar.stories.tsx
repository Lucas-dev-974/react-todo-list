import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Navbar } from './Navbar';
import { expect } from '@storybook/test';
import { within } from '@storybook/testing-library';

const meta: Meta = {
  title: 'Components/Navbar',
  component: Navbar,
};

export default meta;

const Template: StoryFn = () => <Navbar />;

export const Default = Template.bind({});


Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  const heading = await canvas.getByRole('heading', { name: /todo task/i });
  await expect(heading).toBeInTheDocument();
};