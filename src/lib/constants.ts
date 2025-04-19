
import { 
  Home, Users, BarChart3, Settings, Leaf, Calendar, 
  BookOpen, MessageSquare, Map, Database, FileText,
  PieChart, Shield, UserCog, Wallet, Building, Heart
} from 'lucide-react';

export const roleLabels = {
  'resident': 'Community Resident',
  'ngo': 'NGO Staff',
  'government': 'Government Official',
  'admin': 'System Administrator'
};

// Navigation items for each user role
export const roleNavItems = {
  resident: [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/utilities', label: 'Utilities', icon: Leaf },
    { href: '/training', label: 'Training', icon: BookOpen },
    { href: '/community', label: 'Community', icon: Users },
    { href: '/wallet', label: 'Wallet', icon: Wallet },
    { href: '/calendar', label: 'Calendar', icon: Calendar },
  ],
  ngo: [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/projects', label: 'Projects', icon: Leaf },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/community', label: 'Community', icon: Users },
    { href: '/education', label: 'Education', icon: BookOpen },
    { href: '/messages', label: 'Messages', icon: MessageSquare },
  ],
  government: [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/metrics', label: 'Impact Metrics', icon: PieChart },
    { href: '/map', label: 'Project Map', icon: Map },
    { href: '/reports', label: 'Reports', icon: FileText },
    { href: '/compliance', label: 'Compliance', icon: Shield },
    { href: '/clusters', label: 'Slum Clusters', icon: Building },
  ],
  admin: [
    { href: '/dashboard', label: 'Dashboard', icon: Home },
    { href: '/users', label: 'Users', icon: Users },
    { href: '/projects', label: 'Projects', icon: Leaf },
    { href: '/analytics', label: 'Analytics', icon: BarChart3 },
    { href: '/database', label: 'Database', icon: Database },
    { href: '/system', label: 'System', icon: UserCog },
  ],
};

export const dashboardMetrics = {
  resident: [
    { label: 'Solar Credits', value: '320 kWh', change: '+12%', icon: Leaf },
    { label: 'Participation Points', value: '580', change: '+24%', icon: Users },
    { label: 'Training Completed', value: '4/12', change: '33%', icon: BookOpen },
    { label: 'Community Events', value: '6', change: 'New', icon: Heart },
  ],
  ngo: [
    { label: 'Active Projects', value: '12', change: '+2', icon: Leaf },
    { label: 'Community Members', value: '1,243', change: '+89', icon: Users },
    { label: 'Resource Utilization', value: '76%', change: '+5%', icon: BarChart3 },
    { label: 'Training Modules', value: '28', change: '+3', icon: BookOpen },
  ],
  government: [
    { label: 'Clusters Monitored', value: '8', change: '+1', icon: Map },
    { label: 'Carbon Offset', value: '4.2T', change: '+0.8T', icon: Leaf },
    { label: 'Jobs Created', value: '189', change: '+23', icon: Users },
    { label: 'Compliance Rate', value: '94%', change: '+2%', icon: Shield },
  ],
  admin: [
    { label: 'System Status', value: 'Healthy', change: '99.8%', icon: Shield },
    { label: 'Active Users', value: '2,543', change: '+105', icon: Users },
    { label: 'Database Size', value: '1.8GB', change: '+0.2GB', icon: Database },
    { label: 'API Requests', value: '45.2K', change: '+12%', icon: BarChart3 },
  ],
};
