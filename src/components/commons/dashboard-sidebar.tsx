import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar';
import { Settings2, SquareTerminal } from 'lucide-react';
import { NavUser } from '@/components/interfaces/nav-user';
import { createServer } from '@/utils/server-client';
import { redirect } from 'next/navigation';
import { NavHospital } from '@/components/interfaces/nav-hospital';
import { HospitalMenu } from '@/components/interfaces/hospital-menu';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Hospital',
      url: '/hospital/general',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'General',
          url: '/hospital/general'
        },
        {
          title: 'Event',
          url: '/hospital/event'
        }
      ]
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#'
        },
        {
          title: 'Team',
          url: '#'
        },
        {
          title: 'Billing',
          url: '#'
        },
        {
          title: 'Limits',
          url: '#'
        }
      ]
    }
  ]
};

export async function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const supabase = await createServer();

  const { data: userData, error } = await supabase.auth.getUser();
  if (error || !userData?.user) {
    redirect('/login');
  }

  return (
    <Sidebar collapsible={'icon'} {...props}>
      <SidebarHeader>
        <HospitalMenu hospital={{ name: '몬스터' }} />
      </SidebarHeader>
      <SidebarContent>
        <NavHospital items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
