import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Container } from "./Container";
import { within, userEvent } from "@storybook/testing-library";
import { expect } from "@storybook/test";


export default {
    title: "Components/Container",
    component: Container,
} as Meta;

const Template: StoryFn = (args) => <Container>{args.children}</Container>;

export const Default = Template.bind({});

Default.args = {
    children: (
        <div>
            <p>Contenu à l'intérieur du Container</p>
            <button>Un bouton</button>
        </div>
    ),
};

Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: /un bouton/i });

    await expect(button).toBeInTheDocument();
    await userEvent.click(button);
};