
export type UserRole = 'resident' | 'ngo' | 'government' | 'admin';

export interface DemoUser {
  id: string;
  name: string;
  role: UserRole;
  token: string;
}

export const demoUsers: Record<UserRole, DemoUser> = {
  resident: {
    id: 'demo-resident',
    name: 'Demo Resident',
    role: 'resident',
    token: 'demo-token-resident',
  },
  ngo: {
    id: 'demo-ngo',
    name: 'Demo NGO Worker',
    role: 'ngo',
    token: 'demo-token-ngo',
  },
  government: {
    id: 'demo-gov',
    name: 'Demo Government Official',
    role: 'government',
    token: 'demo-token-gov',
  },
  admin: {
    id: 'demo-admin',
    name: 'Demo Admin',
    role: 'admin',
    token: 'demo-token-admin',
  },
};
