import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import dotenv from 'dotenv';

dotenv.config();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export interface AdminUser {
  username: string;
  isAuthenticated: boolean;
}

export async function authenticateAdmin(username: string, password: string): Promise<boolean> {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}

export async function getAdminSession(): Promise<AdminUser | null> {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get('admin-session');
  
  if (!sessionToken || sessionToken.value !== 'authenticated') {
    return null;
  }
  
  if (!ADMIN_USERNAME) {
    throw new Error('ADMIN_USERNAME is not set in environment variables');
  }
  return {
    username: ADMIN_USERNAME,
    isAuthenticated: true
  };
}

export async function requireAuth(): Promise<AdminUser> {
  const session = await getAdminSession();
  if (!session) {
    redirect('/admin/login');
  }
  
  return session;
}

export async function createAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.set('admin-session', 'authenticated', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function destroyAdminSession(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete('admin-session');
} 