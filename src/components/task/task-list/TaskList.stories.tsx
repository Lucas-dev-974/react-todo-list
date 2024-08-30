import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TaskList, TaskListProps } from './TaskList';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/test';

const meta: Meta = {
    title: 'Components/TaskList',
    component: TaskList,
    argTypes: {
        removeTask: { action: 'removeTask' },
        taskList: {
            control: 'object',
            defaultValue: [
                { task: 'Sample Task 1' },
                { task: 'Sample Task 2' },
            ],
        },
    },
};

export default meta;


const Template: StoryFn<TaskListProps> = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    taskList: [
        { task: 'Sample Task 1' },
        { task: 'Sample Task 2' },
    ],
    removeTask: (index) => console.log(`Remove task at index ${index}`),
};




Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simuler un clic sur le bouton de suppression de la première tâche
    const deleteButtons = canvas.getAllByRole('button');
    await userEvent.click(deleteButtons[0]);

    // Vérifier que la fonction removeTask a été appelée avec le bon index
    await expect(canvas.getByText('Sample Task 1')).not.toBeInTheDocument();
};