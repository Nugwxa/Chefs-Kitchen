interface FormSubmissionResult<T> {
  success: boolean
  message: string
  data?: T
  errors?: string[]
}