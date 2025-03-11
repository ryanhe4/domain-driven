import { Button } from '@/components/ui/button';

interface Props {
  hasChanges: boolean | undefined;
  handleReset: () => void; // Handling a reset/cancel of the form
  isPending?: boolean;
}

function FormActions({
  hasChanges = undefined,
  handleReset,
  isPending
}: Props) {
  const isDisabled = isPending || (!hasChanges && hasChanges !== undefined);

  return (
    <div className={'flex w-full items-center gap-2 justify-end'}>
      <div className="flex items-center gap-2">
        <Button
          disabled={isDisabled}
          variant="secondary"
          type={'reset'}
          onClick={handleReset}
        >
          cancel
        </Button>
        <Button disabled={isDisabled} variant="default" type={'submit'}>
          save
        </Button>
      </div>
    </div>
  );
}

export { FormActions };
