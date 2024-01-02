import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import PreviousReport from "./Components/DailyReport/PreviousReport";
import NoticeBoard from "./Components/NoticeBoard/NoticeBoard";
import Todo from "./Components/Todo/Todo";
import Idea from "./Components/Idea/Idea";
import Kpi from "./Components/Kpi/Kpi";
import Dashboard from "./Components/Dashboard/Dashboard";
import LatestUpdate from "./Components/Dashboard/LatestUpdate";
import ImportantLinks from "./Components/Dashboard/ImportantLinks";
import FamilyPhoto from "./Components/Dashboard/FamilyPhoto";
import AddPhoto from "./Components/Dashboard/AddPhoto";
import PhotoDetails from "./Components/Dashboard/PhotoDetails";
import Sidebar from "./Global/Sidebar";
import TodaysReport from "./Components/DailyReport/TodaysReport";
import Profile from "./Components/Profile/Profile";
import TelephoneDirectory from "./Components/Dashboard/TelephoneDirectory";
import EmployeeLogin from "./Components/Login/EmployeeLogin";
import Overtime from "./Components/Overtime/Overtime";
import ViewPreviousReport from "./Components/DailyReport/ViewPreviousReport";
import Login from "./Components/Login/Login";
import ManagementLogin from "./Components/Login/ManagementLogin";
import Attendance from "./Components/Attendance/Attendance";
import Projects from "./Components/Projects/Projects";
import NoticeBoardManagement from "./Components/NoticeBoard/NoticeBoardManagement";
import EmployeeSalary from "./Components/Payroll/EmployeeSalary";
import Earning from "./Components/Payroll/Earning";
import Payslip from "./Components/Payroll/Payslip";
import Deduction from "./Components/Payroll/Deduction";

const Employees = lazy(() => import("./Components/Employees/Employees"));



function App() {
 

  return (
   
      <div className="bg-[#F6F7FF]">
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="employeeLogin" element={<EmployeeLogin />}></Route>
          <Route path="managementLogin" element={<ManagementLogin />}></Route>
          <Route />

          {/* dashboard all routes */}
          <Route path="/dashboard" element={<Sidebar />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="latestUpdate" element={<LatestUpdate />}></Route>
            <Route path="importantLink" element={<ImportantLinks />}></Route>
            <Route
              path="telephoneDirectory"
              element={<TelephoneDirectory />}
            ></Route>
            <Route path="familyPhoto" element={<FamilyPhoto />}></Route>
            <Route path="addPhoto" element={<AddPhoto />}></Route>
            <Route path="photoDetails" element={<PhotoDetails />}></Route>
            <Route path="overtime" element={<Overtime />}></Route>
            <Route path="todaysReport" element={<TodaysReport />}></Route>
            <Route path="previousReport" element={<PreviousReport />}></Route>
            <Route
              path="previousReportDetails" 
              element={<ViewPreviousReport />}
            ></Route>
            <Route path="kpi" element={<Kpi />}></Route>
            <Route path="noticeBoard" element={<NoticeBoard />}></Route>
            <Route
              path="noticeBoardManagement"
              element={<NoticeBoardManagement />}
            ></Route>
            <Route path="todo" element={<Todo />}></Route>
            <Route path="idea" element={<Idea />}></Route>
            <Route path="attendance" element={<Attendance />}></Route>
            <Route
              path="employees"                                                    
              element={
                <Suspense fallback={<p>Loading...</p>}>
               <Employees />
                </Suspense>
              }
            ></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="salary" element={<EmployeeSalary />}></Route>
            <Route path="payrollEarning" element={<Earning />}></Route>
            <Route path="payrollDeduction" element={<Deduction />}></Route>
            <Route path="payslip" element={<Payslip />}></Route>
          </Route>
        </Routes>
      </div>
   
  );
}

export default App;
