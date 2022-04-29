import * as React from 'react'

import { Paragraph } from '../lib'

export default {
  title: 'Typography / Paragraph',
  component: Paragraph,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
}

export function paragraph() {
  return (
    <div className="flex flex-col space-y-4">
      <Paragraph>Title goes here.</Paragraph>
    </div>
  )
}

export function withProse() {
  return (
    <div className="flex flex-col space-y-4">
      <Paragraph prose={true}>Title goes here.</Paragraph>
    </div>
  )
}
