import type { Meta, StoryObj } from "@storybook/react"
import { Steps, StepsTrigger, StepsContent, StepsItem } from "./Steps"
import { IconCircleCheck, IconPointFilled } from "@tabler/icons-react"
import { Loader } from "@/atoms"

const meta: Meta<typeof Steps> = {
  title: "Organisms/Steps",
  component: Steps,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Steps className="w-[400px]">
      <StepsTrigger leftIcon={<IconCircleCheck className="size-4 text-muted-foreground" />}>
        Analyzing code
      </StepsTrigger>
      <StepsContent>
        <StepsItem>Found 3 files to analyze</StepsItem>
        <StepsItem>Identified 2 potential issues</StepsItem>
        <StepsItem>Generated recommendations</StepsItem>
      </StepsContent>
    </Steps>
  ),
}

export const InProgress: Story = {
  render: () => (
    <Steps className="w-[400px]">
      <StepsTrigger leftIcon={<Loader variant="circular" size="sm" className="text-muted-foreground" />}>
        Processing request
      </StepsTrigger>
      <StepsContent>
        <StepsItem>Reading input files...</StepsItem>
        <StepsItem>Parsing content...</StepsItem>
      </StepsContent>
    </Steps>
  ),
}

export const Pending: Story = {
  render: () => (
    <Steps defaultOpen={false} className="w-[400px]">
      <StepsTrigger leftIcon={<IconPointFilled className="size-4 text-muted-foreground" />}>
        Waiting to start
      </StepsTrigger>
      <StepsContent>
        <StepsItem>Step will begin shortly</StepsItem>
      </StepsContent>
    </Steps>
  ),
}

export const MultipleSteps: Story = {
  render: () => (
    <div className="w-[400px] space-y-2">
      <Steps>
        <StepsTrigger leftIcon={<IconCircleCheck className="size-4 text-muted-foreground" />}>
          Step 1: Initialize
        </StepsTrigger>
        <StepsContent>
          <StepsItem>Environment configured</StepsItem>
        </StepsContent>
      </Steps>
      <Steps>
        <StepsTrigger leftIcon={<IconCircleCheck className="size-4 text-muted-foreground" />}>
          Step 2: Analyze
        </StepsTrigger>
        <StepsContent>
          <StepsItem>Code analyzed successfully</StepsItem>
        </StepsContent>
      </Steps>
      <Steps>
        <StepsTrigger leftIcon={<Loader variant="circular" size="sm" className="text-muted-foreground" />}>
          Step 3: Generate
        </StepsTrigger>
        <StepsContent>
          <StepsItem>Generating output...</StepsItem>
        </StepsContent>
      </Steps>
    </div>
  ),
}
