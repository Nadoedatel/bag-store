import type { Meta, StoryObj } from '@storybook/vue3-vite';

import MyButton from "@/components/ui/button/MyButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
    title: 'ui/MyButton',
    component: MyButton,
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text' },
    },
    args: {

    },
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: "message.ChangeLanguage",
    },
};

export const Secondary: Story = {
    args: {
        text: "message.ChangeLanguage",
    },
};

