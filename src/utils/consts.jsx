import img from '../assets/users.jpg'
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import StoreIcon from '@mui/icons-material/Store';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AdjustIcon from '@mui/icons-material/Adjust';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import InsightsIcon from '@mui/icons-material/Insights';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

export const sidebar = [
   {
	  route: '/tasks',
	  title: "Tasks",
	  icon: {
		 active: (
			 <AssignmentIcon sx={{ color: '#992040' }} />
		 ),
		 passive: (
			 <AssignmentOutlinedIcon sx={{ color: '#374A67' }} />
		 ),
	  },
   },
   {
	  route: '/checklist',
	  title: "Checklist",
	  icon: {
		 active: (
			 <ChecklistIcon sx={{ color: '#992040' }} />
		 ),
		 passive: (
			 <ChecklistOutlinedIcon sx={{ color: '#374A67' }} />
		 ),
	  },
   },
   {
	  route: '/visit',
	  title: "Ziyaret",
	  icon: {
		 active: (
			 <BusinessCenterIcon sx={{ color: '#992040' }} />
		 ),
		 passive: (
			 <BusinessCenterOutlinedIcon sx={{ color: '#374A67' }} />
		 ),
	  },
   },
   {
	  route: '/shop',
	  title: "Mağaza",
	  icon: {
		 active: (
			 <StoreIcon sx={{ color: '#992040' }} />
		 ),
		 passive: (
			 <StoreOutlinedIcon sx={{ color: '#374A67' }} />
		 ),
	  },
   },
   {
	  route: '/goal',
	  title: "Hedef",
	  icon: {
		 active: (
			 <AdjustIcon sx={{ color: '#992040' }} />
		 ),
		 passive: (
			 <AdjustOutlinedIcon sx={{ color: '#374A67' }} />
		 ),
	  },
   },
   {
	  route: '/analytics',
	  title: "Analytics",
	  icon: {
		 active: (
			 <InsightsIcon sx={{ color: '#992040' }} />
		 ),
		 passive: (
			 <InsightsOutlinedIcon sx={{ color: '#374A67' }} />
		 ),
	  },
   },
   {
	  route: '/settings',
	  title: "Settings",
	  icon: {
		 active: (
			 <SettingsIcon sx={{ color: '#992040' }} />
		 ),
		 passive: (
			 <SettingsOutlinedIcon sx={{ color: '#374A67' }} />
		 ),
	  },
   },
]


export const sidebarUsers = [
   {
	  profileImg: img,
	  userName: "Deniz Özal",
	  userRole: "Manager",
   },
   // {
   //   profileImg: img,
   //   userName: "Ahmet Kural",
   //   userRole: "Manager",
   // },
   // {
   //   profileImg: img,
   //   userName: "İrem Vural",
   //   userRole: "Manager",
   // },
   // {
   //   profileImg: img,
   //   userName: "Efe Coşgun",
   //   userRole: "Manager",
   // },
]

export const users = [
   {
	  profileImg: img,
	  userName: "Deniz Özal",
	  userRole: "Manager",
   },
   {
	  profileImg: img,
	  userName: "Ahmet Kural",
	  userRole: "Manager",
   },
   {
	  profileImg: img,
	  userName: "İrem Vural",
	  userRole: "Manager",
   },
   {
	  profileImg: img,
	  userName: "Efe Coşgun",
	  userRole: "Manager",
   },
]

export const stores = [
   {
	  title: 'All Stores',
	  number: 24,
	  icon: <FormatListBulletedOutlinedIcon sx={{ color: '#FFFFFF', fontSize: 40 }} />,
	  bgColor: '#FFCA39',
	  iconBgColor: '#FFFFFF',
	  textColor: '#FFFFFF'
   },
   {
	  title: 'Store 1',
	  number: 4,
	  icon: <StoreIcon sx={{ color: '#5C6FDF', fontSize: 40 }} />,
	  bgColor: '#F1F3F5',
	  iconBgColor: '#5C6FDF',
	  textColor: '#213049'
   },
   {
	  title: 'Store 2',
	  number: 6,
	  icon: <StoreIcon sx={{ color: '#61A4E4', fontSize: 40 }} />,
	  bgColor: '#F1F3F5',
	  iconBgColor: '#61A4E4',
	  textColor: '#213049'
   },
   {
	  title: 'Store 3',
	  number: 14,
	  icon: <StoreIcon sx={{ color: '#FF974A', fontSize: 40 }} />,
	  bgColor: '#F1F3F5',
	  iconBgColor: '#FF974A',
	  textColor: '#213049'
   },
]



