import type { Meta, StoryObj } from "@storybook/react"
import { Tool } from "./Tool"

const meta: Meta<typeof Tool> = {
  title: "Organisms/Tool",
  component: Tool,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Processing: Story = {
  args: {
    toolPart: {
      type: "search_web",
      state: "input-streaming",
      input: {
        query: "React hooks tutorial",
      },
    },
    defaultOpen: true,
  },
}

export const Ready: Story = {
  args: {
    toolPart: {
      type: "read_file",
      state: "input-available",
      input: {
        path: "/src/components/Button.tsx",
      },
    },
    defaultOpen: true,
  },
}

export const Completed: Story = {
  args: {
    toolPart: {
      type: "create_file",
      state: "output-available",
      input: {
        path: "/src/utils/helpers.ts",
        content: "export const sum = (a, b) => a + b",
      },
      output: {
        success: true,
        message: "File created successfully",
      },
      toolCallId: "call_abc123",
    },
    defaultOpen: true,
  },
}

export const Error: Story = {
  args: {
    toolPart: {
      type: "execute_command",
      state: "output-error",
      input: {
        command: "npm run build",
      },
      errorText: "Command failed with exit code 1: Module not found: '@/lib/utils'",
      toolCallId: "call_xyz789",
    },
    defaultOpen: true,
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="w-[500px] space-y-4">
      <Tool
        toolPart={{
          type: "search_web",
          state: "input-streaming",
          input: { query: "Searching..." },
        }}
      />
      <Tool
        toolPart={{
          type: "read_file",
          state: "input-available",
          input: { path: "/file.ts" },
        }}
      />
      <Tool
        toolPart={{
          type: "create_file",
          state: "output-available",
          input: { path: "/new.ts" },
          output: { success: true },
        }}
      />
      <Tool
        toolPart={{
          type: "execute",
          state: "output-error",
          input: { cmd: "npm test" },
          errorText: "Test failed",
        }}
      />
    </div>
  ),
}
