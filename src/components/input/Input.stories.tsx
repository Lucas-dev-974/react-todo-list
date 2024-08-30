import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from './Input';

// Définir les métadonnées du composant
const meta: Meta = {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    value: { control: 'text' },
    placeholder: { control: 'text' },
    onChange: { action: 'changed' },
  },
};

export default meta;

const Template: StoryFn<InputProps> = (args: any) => {
  const [value, setValue] = useState(args.value || '');

  return (
    <Input
      {...args}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
        args.onChange(newValue);
      }}
    />
  );
};


export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter some text...',
  value: '',
};

export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  placeholder: 'Enter some text...',
  value: 'Initial value',
};
