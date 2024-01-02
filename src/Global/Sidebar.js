import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import dashboard from "../assets/logo/dashboard.png";
import report from "../assets/logo/report.png";
import kpi from "../assets/logo/kpi.png";
import todo from "../assets/logo/todo.png";
import idea from "../assets/logo/idea.png";
import notice from "../assets/logo/notice.png";
import overtime from "../assets/logo/overtime.png";
import attendance from "../assets/logo/attendance.png";
import projects from "../assets/logo/projects.png";
import employees from "../assets/logo/employees.png";
import logout from "../assets/logo/logout.png";
import todayReport from "../assets/logo/today-report.png";
import preReport from "../assets/logo/pre-report.png";
import payroll from "../assets/logo/payroll.png";
import salary from "../assets/logo/salary.png";
import payslip from "../assets/logo/payslip.png";
import payrollItem from "../assets/logo/payroll-item.png";
import Header from "./Header";

const Sidebar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div>
      <Header />
      <div className="">
        <div>
          <label tabIndex="0" htmlFor="dashboard-sidebar" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 m-2 text-violet-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
        <div className="sidebar drawer drawer-mobile">
          <input
            id="dashboard-sidebar"
            type="checkbox"
            className="drawer-toggle"
          />
          <div className="drawer-content">
            <Outlet></Outlet>
          </div>
          <div className=" w-[370px] drawer-side  lg:shadow">
            <label
              htmlFor="dashboard-sidebar"
              className="drawer-overlay"
            ></label>
            <ul
              style={{ overflowY: "scroll" }}
              className="sidebar menu py-4 bg-base-100 text-base-content"
            >
              {/* <!-- Sidebar content here --> */}
              <li>
                <Link
                  to="/dashboard/profile"
                  className="flex items-center anchor mb-3"
                >
                  <div className="avatar">
                    <div className="w-[52px] rounded-full">
                      <img src="https://placeimg.com/192/192/people" alt="d" />
                    </div>
                  </div>
                  <div className="">
                    <h5 className="profile_name">Nazmul Hasan</h5>
                    <p className="team">Team member</p>
                  </div>
                </Link>
              </li>
              <li className="">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                  to="/dashboard"
                >
                  <img src={dashboard} alt="" /> Dashboard
                </NavLink>
              </li>

              <div class="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title menu_route menu_inactive flex gap-x-3">
                  <img src={report} alt="" /> Daily Report
                </div>
                <div class="collapse-content pl-16 pr-0">
                  <div>
                    <NavLink
                      to="/dashboard/todaysReport"
                      className={({ isActive }) =>
                        isActive
                          ? "menu_route menu_active flex gap-x-3"
                          : "menu_route menu_inactive flex gap-x-3"
                      }
                    >
                      <img src={todayReport} alt="" /> Today’s Report
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/dashboard/previousReport"
                      className={({ isActive }) =>
                        isActive
                          ? "menu_route menu_active flex gap-x-3"
                          : "menu_route menu_inactive flex gap-x-3"
                      }
                    >
                      <img src={preReport} alt="" /> Previous Report
                    </NavLink>
                  </div>
                </div>
              </div>

              <li>
                <NavLink
                  to="/dashboard/kpi"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                  // className={`cursor-pointer ${
                  //   location.pathname === dashboard/kpi ? "menu_route menu_active" : "menu_route menu_inactive"
                  // }`}
                >
                  <img src={kpi} alt="" /> KPI
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/noticeBoard"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  <img src={notice} alt="" /> Notice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/todo"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  {" "}
                  <img src={todo} alt="" /> Todo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/idea"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  <img src={idea} alt="" /> Idea
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/overtime"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  <img  src={overtime} alt="" /> Overtime
                </NavLink>
              </li>
              {/* management menu */}
              <li>
                <NavLink
                  to="/dashboard/attendance"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  <img src={attendance} alt="" /> Attendance
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/projects"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  <img src={projects} alt="" /> Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/employees"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  <img src={employees} alt="" /> Employees
                </NavLink>
              </li>

              <div class="collapse collapse-arrow">
                <input type="checkbox" />
                <div class="collapse-title menu_route menu_inactive flex gap-x-3">
                  <img className="object-contain" src={payroll} alt="" />{" "}
                  Payroll
                </div>
                <div class="collapse-content pl-16 pr-0">
                  <div>
                    <NavLink
                      to="/dashboard/salary"
                      className={({ isActive }) =>
                        isActive
                          ? "menu_route menu_active flex gap-x-3"
                          : "menu_route menu_inactive flex gap-x-3"
                      }
                    >
                      <img src={salary} alt="" /> Employee Salary
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/dashboard/payslip"
                      className={({ isActive }) =>
                        isActive
                          ? "menu_route menu_active flex gap-x-3"
                          : "menu_route menu_inactive flex gap-x-3"
                      }
                    >
                      <img src={payslip} alt="" /> Payslip
                    </NavLink>
                  </div>
                  <div>
                    <NavLink
                      to="/dashboard/payrollEarning"
                      className={({ isActive }) =>
                        isActive
                          ? "menu_route menu_active flex gap-x-3"
                          : "menu_route menu_inactive flex gap-x-3"
                      }
                    >
                      <img src={payrollItem} alt="" /> Payroll Items
                    </NavLink>
                  </div>
                </div>
              </div>

              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "menu_route menu_active"
                      : "menu_route menu_inactive"
                  }
                >
                  {" "}
                  <img src={logout} alt="" /> Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
