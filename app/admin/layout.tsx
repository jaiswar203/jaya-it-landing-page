import { getAdminSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Check if user is on login page
  const pathname = '/admin/login';
  
  // If not on login page, check authentication
  if (pathname !== '/admin/login') {
    const session = await getAdminSession();
    if (!session) {
      redirect('/admin/login');
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
} 