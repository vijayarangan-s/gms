import react from 'react';
import Dashboard from './Dashboard'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Reports from './Reports';
import AddEnquiry from './AddEnquiry';
import Login from './Login';
import AddPackage from './AddPackage';
import AddPersonalTrainer from './AddPersonalTrainer';
import AddMembership from './AddMembership';
import AddNewMember from './AddNewMember';
import CreateBill from './CreateBill';
import addBill from './addBill';
import ViewEnquiry from './ViewEnquiry';
import ViewPackage from './ViewPackage';
import ViewPersonalTrainer from './ViewPersonalTrainer';
import ViewMemberShip from './ViewMemberShip';
import ViewBill from './ViewBill';

function Master() {

   const listStyle = {
       marginLeft: "24px"
   } 

  return (
    <>
        <Router>
         {/* <!--  BEGIN NAVBAR  --> */}
           <div className="header-container fixed-top">
        <header className="header navbar navbar-expand-sm">

            <ul className="navbar-item theme-brand flex-row  text-center">
                <li className="nav-item theme-logo">
                    <a href="index-2.html">
                        <img src="assets/img/logo.svg" className="navbar-logo" alt="logo" />
                    </a>
                </li>
                <li className="nav-item theme-text">
                    <a href="index-2.html" className="nav-link"> OCTANGLE </a>
                </li>
            </ul>

            <ul className="navbar-item flex-row ml-md-0 ml-auto">
                <li className="nav-item align-self-center search-animated">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="feather feather-search toggle-search">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <form className="form-inline search-full form-inline search" role="search">
                        <div className="search-bar">
                            <input type="text" className="form-control search-form-control  ml-lg-auto"
                                placeholder="Search..." />
                        </div>
                    </form>
                </li>
            </ul>

            <ul className="navbar-item flex-row ml-md-auto">
                <li className="nav-item dropdown user-profile-dropdown" >
                    <a href="#javascript" className="nav-link dropdown-toggle user" id="userProfileDropdown"
                        data-toggle="dropdown"  aria-expanded="true">
                        <img src="assets/img/profile-16.jpg" alt="avatar" />
                    </a>
                    <div className="dropdown-menu position-absolute" aria-labelledby="userProfileDropdown">
                        <div className="">
                            <div className="dropdown-item">
                                <a href="user_profile.html"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-user">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg> My Profile</a>
                            </div>
                            <div className="dropdown-item">
                                <a href="apps_mailbox.html"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-inbox">
                                        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
                                        <path
                                            d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z">
                                        </path>
                                    </svg> Inbox</a>
                            </div>
                            <div className="dropdown-item">
                                <a href="auth_lockscreen.html"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                        height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        className="feather feather-lock">
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg> Lock Screen</a>
                            </div>
                            <div className="dropdown-item">
                                <a href="auth_login.html"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                        strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                    </svg> Sign Out</a>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </header>
     </div>
         {/* <!--  END NAVBAR  --> */}

        {/* <!--  BEGIN NAVBAR  --> */}
          <div className="sub-header-container">
        <header className="header navbar navbar-expand-sm">
            <a href="#javascript" className="sidebarCollapse" data-placement="bottom">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="feather feather-menu"
                    >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg></a>

            <ul className="navbar-nav flex-row">
                <li>
                    <div className="page-header">

                        <nav className="breadcrumb-one" aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#javascript">Dashboard</a></li>
                                <li className="breadcrumb-item active" aria-current="page"><span>Sales</span></li>
                            </ol>
                        </nav>

                    </div>
                </li>
            </ul>
            <ul className="navbar-nav flex-row ml-auto ">
                <li className="nav-item more-dropdown">
                    <div className={ "dropdown custom-dropdown-icon "}
                     >
                        <a href="#javascript" className="dropdown-toggle btn" role="button" id="customDropdown" data-toggle="dropdown" aria-haspopup="true" 
                        >   
                            <span>Settings</span> 
                            <svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round" className="feather feather-chevron-down">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right " aria-labelledby="customDropdown">
                            <a className="dropdown-item" data-value="Settings" href="#javascript">Settings</a>
                            <a className="dropdown-item" data-value="Mail" href="#javascript">Mail</a>
                            <a className="dropdown-item" data-value="Print" href="#javascript">Print</a>
                            <a className="dropdown-item" data-value="Download" href="#javascript">Download</a>
                            <a className="dropdown-item" data-value="Share" href="#javascript">Share</a>
                        </div>
                    </div>
                </li>
            </ul>
        </header>
    </div>
        {/* <!--  END NAVBAR  --> */}

        {/* <!--  BEGIN MAIN CONTAINER  --> */}
        {
           <div className="main-container" id="container">    
            <div className="overlay"></div>
            <div className="search-overlay"></div>

            {/* <!--  BEGIN SIDEBAR  --> */}
            {    <div className="sidebar-wrapper sidebar-theme">
                    
                        <nav id="sidebar">
                            <div className="shadow-bottom"></div>
                            <ul className="list-unstyled menu-categories" id="accordionExample">
                                <Link to="/dashboard">
                                    <li className="menu">
                                            <a href="widgets.html" aria-expanded="false" className="dropdown-toggle">
                                        
                                                <div className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" className="feather feather-airplay">
                                                        <path
                                                            d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1">
                                                        </path>
                                                        <polygon points="12 15 17 21 7 21 12 15"></polygon>
                                                    </svg>
                                                    <span>Dashboard</span>
                                                </div>
                                            </a>
                                    </li>
                                </Link>


                                <li className="menu">
                                    <a href="#enquiry" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-cpu">
                                                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                                <rect x="9" y="9" width="6" height="6"></rect>
                                                <line x1="9" y1="1" x2="9" y2="4"></line>
                                                <line x1="15" y1="1" x2="15" y2="4"></line>
                                                <line x1="9" y1="20" x2="9" y2="23"></line>
                                                <line x1="15" y1="20" x2="15" y2="23"></line>
                                                <line x1="20" y1="9" x2="23" y2="9"></line>
                                                <line x1="20" y1="14" x2="23" y2="14"></line>
                                                <line x1="1" y1="9" x2="4" y2="9"></line>
                                                <line x1="1" y1="14" x2="4" y2="14"></line>
                                            </svg>
                                            <span>Enquiry</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-chevron-right">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="enquiry" data-parent="#accordionExample">
                                        <li>
                                            <Link to="/addEnquiry" style={listStyle}> Add Enquiry </Link>
                                        </li>
                                        <li>
                                            <Link to="/viewEnquiry" style={listStyle}> View Enquiry </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#package" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-box">
                                                <path
                                                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                                                </path>
                                                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                                <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                            </svg>
                                            <span>Package</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-chevron-right">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="package" data-parent="#accordionExample">
                                        <li>
                                            <Link to="/addPackage"  style={listStyle}> Add Package </Link>
                                        </li>
                                        <li>
                                            <Link to="/viewPackage"  style={listStyle}> View Package </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#personalTrainer" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-zap">
                                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                            </svg>
                                            <span>Personal Trainer</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-chevron-right">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="personalTrainer" data-parent="#accordionExample">
                                        <li>
                                            <Link to="/addPersonalTrainer"  style={listStyle}> 
                                                Add Personal Trainer 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/viewPersonalTrainer"  style={listStyle}> 
                                                View Personal Trainer 
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#membership" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-target">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <circle cx="12" cy="12" r="6"></circle>
                                                <circle cx="12" cy="12" r="2"></circle>
                                            </svg>
                                            <span>Membership</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-chevron-right">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="membership" data-parent="#accordionExample">
                                        <li>
                                            <Link to="/addMembership"  style={listStyle}> 
                                                Add Membership 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/viewMembership"  style={listStyle}> 
                                                View Membership 
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="menu">
                                    <a href="#bill" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                                        <div className="">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-layers">
                                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                                <polyline points="2 17 12 22 22 17"></polyline>
                                                <polyline points="2 12 12 17 22 12"></polyline>
                                            </svg>
                                            <span>Payment</span>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round" className="feather feather-chevron-right">
                                                <polyline points="9 18 15 12 9 6"></polyline>
                                            </svg>
                                        </div>
                                    </a>
                                    <ul className="collapse submenu list-unstyled" id="bill" data-parent="#accordionExample">
                                        <li>
                                            <Link to="/createBill"  style={listStyle}> 
                                               Create Bill
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/viewBill"  style={listStyle}> 
                                                View Bill 
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <Link to="/report" >
                                    <li className="menu" style={{marginTop: "-21px"}}>
                                        <a href="#javascript" aria-expanded="false"
                                            className="dropdown-toggle">
                                                <div className="">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round" className="feather feather-book">
                                                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                                    </svg>
                                                    <span>Reports</span>
                                                </div>
                                        </a>
                                    </li>
                                </Link>

                            </ul>

                        </nav>

                </div>}
            {/* <!--  END SIDEBAR  --> */}
            
            {/* <!--  BEGIN CONTENT AREA  --> */}
            <div id="content" className="main-content">
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route path="/Login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/report" component={Reports}/>
                        <Route path="/addEnquiry" component={AddEnquiry}/>
                        <Route path="/addPackage" component={AddPackage} />
                        <Route path="/addPersonalTrainer" component={AddPersonalTrainer} />
                        <Route path="/addMembership" component={AddMembership} />
                        <Route path="/createBill" component={CreateBill} />
                        <Route path="/viewEnquiry" component={ViewEnquiry} />
                        <Route path="/viewPackage" component={ViewPackage}/>
                        <Route path="/viewPersonalTrainer" component={ViewPersonalTrainer}/>
                        <Route path="/viewMembership" component={ViewMemberShip}/>
                        <Route path="/viewBill" component={ViewBill}/>
                    </Switch>
            </div>
            </div>
        }
        </Router>
    </>
  );
}

export default Master;
