import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AdminHomePage from './AdminHomePage';
import AdminProfile from './AdminProfile';
import ShowClasses from './classRelated/ShowClasses';
import AddClass from './classRelated/AddClass';
import ClassDetails from './classRelated/ClassDetails';
import ShowSubjects from './subjectRelated/ShowSubjects';
import ViewSubject from './subjectRelated/ViewSubject';
import ShowStudents from './studentRelated/ShowStudents';
import ShowNotices from './noticeRelated/ShowNotices';
import AddNotice from './noticeRelated/AddNotice';
import SeeComplains from './complainRelated/SeeComplains';

const AdminDashboard = () => {
  const { currentUser } = useSelector((state: any) => state.user);

  if (!currentUser) {
    return <Navigate to="/Adminlogin" replace />;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <AdminSidebar />
        
        <main className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card flex items-center px-6 sticky top-0 z-10">
            <SidebarTrigger className="mr-4" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-foreground">
                {currentUser.schoolName || 'Admin Portal'}
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Welcome, <span className="font-medium text-foreground">{currentUser.name}</span>
              </span>
            </div>
          </header>

          {/* Content */}
          <div className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<AdminHomePage />} />
              <Route path="/dashboard" element={<AdminHomePage />} />
              <Route path="/profile" element={<AdminProfile />} />
              
              {/* Class Routes */}
              <Route path="/classes" element={<ShowClasses />} />
              <Route path="/classes/add" element={<AddClass />} />
              <Route path="/classes/class/:id" element={<ClassDetails />} />
              
              {/* Subject Routes */}
              <Route path="/subjects" element={<ShowSubjects />} />
              <Route path="/subjects/subject/:classID/:subjectID" element={<ViewSubject />} />
              
              {/* Student Routes */}
              <Route path="/students" element={<ShowStudents />} />
              
              {/* Notice Routes */}
              <Route path="/notices" element={<ShowNotices />} />
              <Route path="/addnotice" element={<AddNotice />} />
              
              {/* Complain Routes */}
              <Route path="/complains" element={<SeeComplains />} />
              
              {/* Placeholder routes for other sections */}
              <Route path="/teachers" element={<div className="text-center py-12"><h2 className="text-2xl font-semibold">Teachers - Coming Soon</h2></div>} />
            </Routes>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
