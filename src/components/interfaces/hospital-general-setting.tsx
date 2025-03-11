'use client';

import { useHospital } from '@/application/useHospital';
import { HospitalTabLayout } from '@/components/layouts/hospital-tab-layout';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { useForm, useWatch } from 'react-hook-form';
import { useMemo } from 'react';
import { useHospitalUpdateMutation } from '@/application/hospital-update-mutation';
import { FormActions } from '@/components/commons/form-actions';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormPannel } from '@/components/layouts/form-pannel';
import Image from 'next/image';

const hospitalSettingSchema = z.object({
  hspt_name: z.string(),
  hspt_image: z.instanceof(File).or(z.undefined())
});

export function HospitalGeneralSetting() {
  const { data } = useHospital();
  const initialValue = useMemo(
    () => ({
      hspt_name: data.hspt_name ?? ''
    }),
    [data]
  );

  const form = useForm<z.infer<typeof hospitalSettingSchema>>({
    resolver: zodResolver(hospitalSettingSchema),
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
      location.reload();
    }
  });

  const handleReset = () => {
    form.reset(initialValue);
    location.reload();
  };

  const onFormSubmit = form.handleSubmit((formData) => {
    updateHospital({
      id: data.id,
      hspt_name: formData.hspt_name ?? '',
      hspt_image: formData.hspt_image
    });
  });

  return (
    <HospitalTabLayout>
      <Form {...form}>
        <form onSubmit={onFormSubmit}>
          <FormPannel
            title={'General settings'}
            form={
              <>
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
                    <Input
                      defaultValue={data.id}
                      readOnly
                      className={'bg-muted'}
                    />
                  </div>
                </div>

                <div className="leading-4 grid gap-2 md:grid-cols-12 text-sm">
                  <div className="flex space-x-2 justify-between col-span-12">
                    <Label>Hospital image</Label>
                  </div>
                  <div className={'relative size-10'}>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data.avatar_url}`}
                      alt={'avatar_url'}
                      fill
                    />
                  </div>
                  <div className="col-span-12">
                    <FormField
                      control={form.control}
                      name="hspt_image"
                      render={({ field: { value, onChange, ...rest } }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              type={'file'}
                              placeholder={'hospital image'}
                              onChange={(e) => {
                                console.log(value);
                                if (
                                  e.target.files !== null &&
                                  e.target.files[0]
                                ) {
                                  onChange(e.target.files[0]);
                                }
                              }}
                              {...rest}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
              </>
            }
            formActions={
              <FormActions
                handleReset={handleReset}
                hasChanges={hasChanges}
                isPending={isPending}
              />
            }
          />
        </form>
      </Form>
    </HospitalTabLayout>
  );
}
