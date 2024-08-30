import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TaskItem, TaskItemProps } from './TaskItem';

import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/test';

const meta: Meta = {
    title: 'Components/TaskItem',
    component: TaskItem,
    argTypes: {
        removeTask: { action: 'removeTask' },
        task: {
            control: 'object',
            defaultValue: { task: 'Sample Task' },
        },
    },
};

export default meta;


const Template: StoryFn<TaskItemProps> = (args) => <TaskItem {...args} />;


export const Default = Template.bind({});
Default.args = {
    task: { task: 'Sample Task' },
    index: 0,
    removeTask: (index) => console.log(`Remove task at index ${index}`),
};

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simuler un clic sur le bouton de suppression
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // Vérifier que la fonction removeTask a été appelée avec le bon index
    await expect(canvas.getByText('Sample Task')).not.toBeInTheDocument();
};  