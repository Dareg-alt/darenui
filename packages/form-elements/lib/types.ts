import React from 'react'

import { inputSize } from './utils'

type InputProps = {
  hasError?: boolean
  icon?: React.ElementType
  inputSize?: inputSize
} & (
  | ({ type: 'textarea' } & JSX.IntrinsicElements['textarea'])
  | JSX.IntrinsicElements['input']
)
type FieldProps = {
  defaultValue?: string | null
  name: string
  label?: string
  className?: string
  error?: string | null
  description?: React.ReactNode
}

export type { InputProps, FieldProps }
