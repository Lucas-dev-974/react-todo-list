// AddTask.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { AddTask, AddTaskDialogProps } from './AddTask';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/test';

// Définir les métadonnées du composant
const meta: Meta = {
    title: 'Components/AddTask',
    component: AddTask,
    argTypes: {
        addTask: { action: 'addTask' },
    },
};

export default meta;

// Créer un template de story
const Template: StoryFn<AddTaskDialogProps> = (args) => <AddTask {...args} />;

// Définir la story
export const Default = Template.bind({});
Default.args = {
    addTask: (task) => console.log(task),
};


// Ajouter une fonction play pour tester l'interaction
Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simuler la saisie de texte dans l'Input
    const input = canvas.getByPlaceholderText('Entrez une tâche');
    await userEvent.type(input, 'New Task');

    // Simuler un clic sur le bouton
    const button = canvas.getByRole('button');
    await userEvent.click(button);

    // Vérifier que la fonction addTask a été appelée avec la bonne valeur
    await expect(canvas.getByText('New Task')).toBeInTheDocument();
};