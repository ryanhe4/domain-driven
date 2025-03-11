'use client';

import { useHospital } from '@/application/useHospital';
import { HospitalTabLayout } from '@/components/layouts/hospital-tab-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { useForm, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { useHospitalUpdateMutation } from '@/application/hospital-update-mutation';
import { FormActions } from '@/components/commons/form-actions';

export function HospitalGeneralSetting() {
  const { data } = useHospital();

  const initialValue = useMemo(
    () => ({ hspt_name: data.hspt_name ?? '' }),
    [data]
  );

  const form = useForm({
    defaultValues: initialValue
  });

  const values = useWatch({ control: form.control });
  const hasChanges = useMemo(
    () => JSON.stringify(values) !== JSON.stringify(initialValue),
    [initialValue, values]
  );

  const { mutate: updateHospital, isPending } = useHospitalUpdateMutation({
    onSuccess: () => {
      form.reset(values);
    }
  });

  const handleReset = () => {
    form.reset(initialValue);
  };

  const onFormSubmit = form.handleSubmit(() => {
    updateHospital({
      hspt_name: values.hspt_name ?? '',
      id: data.id,
      avatar_url: ''
    });
  });

  return (
    <HospitalTabLayout>
      <Form {...form}>
        <form onSubmit={onFormSubmit}>
          <section className="bg-background border rounded-md shadow max-w-full">
            <div className="divide-border flex flex-col gap-0 divide-y">
              <div className="grid grid-cols-12 gap-6 px-4 md:px-8 py-4 md:py-8">
                <Label
                  className={
                    'block text-foreground col-span-12 text-sm lg:col-span-5'
                  }
                >
                  General settings
                </Label>
                <div className="relative col-span-12 flex flex-col gap-6 lg:col-span-7">
                  <div className="leading-4 grid gap-2 md:grid-cols-12 text-sm">
                    <div className="flex space-x-2 justify-between col-span-12">
                      <Label>Hospital name</Label>
                    </div>

                    <div className="col-span-12">
                      <FormField
                        control={form.control}
                        name="hspt_name"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input placeholder={'hospital name'} {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="leading-4 grid gap-2 md:grid-cols-12 text-sm">
                    <div className="flex space-x-2 justify-between col-span-12">
                      <Label>Hospital id</Label>
                    </div>

                    <div className="col-span-12">
                      <Input defaultValue={data.id} readOnly />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t">
              <div className="flex p-4 md:px-8">
                <FormActions
                  handleReset={handleReset}
                  hasChanges={hasChanges}
                  isPending={isPending}
                />
              </div>
            </div>
          </section>
        </form>
      </Form>
    </HospitalTabLayout>
  );
}
