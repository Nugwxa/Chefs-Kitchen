interface FormSubmissionResult<T = unknown> {
  success: boolean
  message: string
  data?: T
  errors?: string[]
}
