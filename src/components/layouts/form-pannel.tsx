import { Label } from '@/components/ui/label';

interface Props {
  title: string;
  form: React.ReactNode;
  formActions: React.ReactNode;
}

export function FormPannel({ title, form, formActions }: Props) {
  return (
    <section className="bg-background border rounded-md shadow max-w-full">
      <div className="divide-border flex flex-col gap-0 divide-y">
        <div className="grid grid-cols-12 gap-6 px-4 md:px-8 py-4 md:py-8">
          <Label
            className={
              'block text-foreground col-span-12 text-sm lg:col-span-5'
            }
          >
            {title}
            {/*General settings*/}
          </Label>
          <div className="relative col-span-12 flex flex-col gap-6 lg:col-span-7">
            {form}
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="flex p-4 md:px-8">{formActions}</div>
      </div>
    </section>
  );
}
