import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HospitalTabLayout } from '@/components/layouts/hospital-tab-layout';

export default async function HospitalGeneralPage() {
  return (
    <>
      <header className=" border-b">
        <div className="flex py-2 px-3">
          <small
            className={
              'text-sm font-medium leading-none px-2 py-1 text-muted-foreground'
            }
          >
            settings
          </small>
        </div>
      </header>
      <main>
        <Tabs defaultValue={'general'}>
          <div className="w-full pt-6 border-b">
            <div className="mx-auto w-full px-4 max-w-[1200px] lg:px-14 xl:px-24">
              <h1 className={'text-2xl pb-3'}>Hospital Settings</h1>
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="doctor">Doctor</TabsTrigger>
              </TabsList>
            </div>
          </div>
          <TabsContent value="general">
            <HospitalTabLayout>gerneral setting</HospitalTabLayout>
          </TabsContent>
          <TabsContent value="doctor">
            <HospitalTabLayout>doctor setting</HospitalTabLayout>
          </TabsContent>
        </Tabs>
      </main>
    </>
  );
}
