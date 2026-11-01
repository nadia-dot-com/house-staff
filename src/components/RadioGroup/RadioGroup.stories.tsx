import { useState } from "react";
import { RadioGroup } from "@/components/RadioGroup/RadioGroup";
import { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  argTypes: {
    onClick: { action: (option: { id: number; name: string }) => option },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<(typeof args.options)[0] | null>(
      null,
    );

    return (
      <RadioGroup
        {...args}
        method={selected}
        onClick={(option) => {
          setSelected(option);
          args.onClick?.(option);
        }}
      />
    );
  },
  args: {
    title: "Title",
    options: [
      { id: 1, name: "option1" },
      { id: 2, name: "option2" },
      { id: 3, name: "option3" },
    ],
    method: null,
  },
};
