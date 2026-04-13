import type { Meta, StoryObj } from "@storybook/react"
import * as React from "react"
import { FileUpload, FileUploadTrigger, FileUploadContent } from "./FileUpload"
import { Button } from "@/atoms"
import { IconUpload, IconFile } from "@tabler/icons-react"

const meta: Meta<typeof FileUpload> = {
  title: "Molecules/FileUpload",
  component: FileUpload,
  parameters: { layout: "centered" },
  tags: ["autodocs", "ai"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [files, setFiles] = React.useState<File[]>([])

    return (
      <div className="space-y-4">
        <FileUpload onFilesAdded={(newFiles) => setFiles([...files, ...newFiles])}>
          <FileUploadTrigger asChild>
            <Button variant="outline">
              <IconUpload className="mr-2 size-4" />
              Upload Files
            </Button>
          </FileUploadTrigger>
          <FileUploadContent>
            <div className="flex flex-col items-center gap-4 p-8 border-2 border-dashed rounded-lg">
              <IconUpload className="size-12 text-muted-foreground" />
              <p className="text-lg font-mono">Drop files here</p>
            </div>
          </FileUploadContent>
        </FileUpload>

        {files.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground font-mono">Uploaded files:</p>
            {files.map((file, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <IconFile className="size-4" />
                {file.name}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  },
}

export const SingleFile: Story = {
  render: () => {
    const [file, setFile] = React.useState<File | null>(null)

    return (
      <FileUpload
        multiple={false}
        onFilesAdded={(files) => setFile(files[0])}
        accept="image/*"
      >
        <FileUploadTrigger asChild>
          <Button variant="outline">
            <IconUpload className="mr-2 size-4" />
            Upload Image
          </Button>
        </FileUploadTrigger>
        <FileUploadContent>
          <div className="flex flex-col items-center gap-4 p-8 border-2 border-dashed rounded-lg">
            <IconUpload className="size-12 text-muted-foreground" />
            <p className="text-lg font-mono">Drop image here</p>
          </div>
        </FileUploadContent>
        {file && (
          <p className="mt-2 text-sm">Selected: {file.name}</p>
        )}
      </FileUpload>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <FileUpload disabled onFilesAdded={() => {}}>
      <FileUploadTrigger asChild>
        <Button variant="outline" disabled>
          <IconUpload className="mr-2 size-4" />
          Upload Disabled
        </Button>
      </FileUploadTrigger>
    </FileUpload>
  ),
}
