import { Button, ButtonProps, ProgressCircle } from '@/shared'

export type BaseButtonProps = ButtonProps & {
  loadingText?: string
}

export const BaseButton = ({ loadingText, isPending, children }: BaseButtonProps) => {
  return (
    <Button size="small" type="submit" isPending={isPending}>
      {({ isPending }) => (
        <>
          {isPending && <ProgressCircle isIndeterminate />}
          {isPending ? loadingText : children}
        </>
      )}
    </Button>
  )
}
