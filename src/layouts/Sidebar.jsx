import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { Scrollbars } from 'react-custom-scrollbars';

const Sidebar = (props) => {

    const [isSideMenu, setSideMenu] = useState("")

    const toggleSidebar = (value) => {
        console.log(value);
        setSideMenu(value)

    }

    console.log("Working", isSideMenu)


    let pathName = props.location.pathname;
    return (



        <div className="sidebar" id="sidebar">
            <Scrollbars
                autoHide
                autoHideTimeout={1000}
                autoHideDuration={200}
                autoHeight
                autoHeightMin={0}
                autoHeightMax="95vh"
                thumbMinSize={30}
                universal={false}
                hideTracksWhenNotNeeded={true}
            >
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title"><span>Main</span></li>
                            <li className={`${'/index' === pathName ? 'active' : ''}`}>
                                <Link to="/index"><FeatherIcon icon="home" /> <span>Dashboard</span></Link>
                            </li>
                            <li className={`${'/customers' === pathName || '/add-customer' === pathName || '/add-customer' === pathName ? 'active' : ''}`}>
                                <Link to="/customers"><FeatherIcon icon="users" /><span>Customers</span></Link>
                            </li>
                            <li className={`${'/estimates' === pathName || '/add-estimate' === pathName || '/edit-estimate' === pathName || '/view-estimate' === pathName ? 'active' : ''}`}>
                                <Link to="/estimates"><FeatherIcon icon="file-text" /><span>Estimates</span></Link>
                            </li>

                            <li className={`${'/invoices' === pathName || '/invoice-details' === pathName || '/tax-settings' === pathName || '/invoice-paid' === pathName || '/invoice-overdue' === pathName || '/invoice-draft' === pathName || '/invoice-recurring' === pathName || '/invoice-cancelled' === pathName || '/bank-settings' === pathName || '/invoices-settings' === pathName || '/invoice-grid' === pathName || '/add-invoice' === pathName || '/edit-invoice'
                                === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link to="#" className={isSideMenu == "invoice" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "invoice" ? "" : "invoice")}><FeatherIcon icon="clipboard" /> <span> Invoices</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "invoice" ?
                                    <ul>
                                        <li className={`${'/invoices' === pathName ? 'active' : ''}`}><Link to="/invoices">Invoices List</Link></li>
                                        <li className={`${'/invoice-grid' === pathName ? 'active' : ''}`}><Link to="/invoice-grid">Invoices Grid</Link></li>
                                        <li className={`${'/add-invoice' === pathName ? 'active' : ''}`}><Link to="/add-invoice">Add Invoices</Link></li>
                                        <li className={`${'/edit-invoice' === pathName ? 'active' : ''}`}><Link to="/edit-invoice">Edit Invoices</Link></li>
                                        <li className={`${'/invoice-details' === pathName ? 'active' : ''}`}><Link to="/invoice-details">Invoices Details</Link></li>
                                        <li className={`${'/invoices-settings' === pathName ? 'active' : ''}`}><Link to="/invoices-settings">Invoices Settings</Link></li>
                                    </ul>
                                    : ""
                                }
                            </li>
                            <li className={`${'/payments' === pathName || '/add-payments' === pathName ? 'active' : ''}`}>
                                <Link to="/payments"><FeatherIcon icon="credit-card" /> <span>Payments</span></Link>
                            </li>
                            <li className={`${'/expenses' === pathName || '/add-expenses' === pathName || '/edit-expenses' === pathName ? 'active' : ''}`}>
                                <Link to="/expenses"><FeatherIcon icon="package" /> <span>Expenses</span></Link>
                            </li>
                            <li className={`${'/sales-report' === pathName || '/expenses-report' === pathName || '/profit-loss-report' === pathName
                                || '/taxs-report' === pathName ? 'active submenu' : 'submenu'}`}>
                                <Link to="#" className={isSideMenu == "report" ? "subdrop" : ""} onClick={() => toggleSidebar(isSideMenu == "report" ? "" : "report")}><FeatherIcon icon="pie-chart" /> <span> Reports</span><span className="menu-arrow"></span></Link>
                                {isSideMenu == "report" ?
                                    <ul>
                                        <li className={`${'/sales-report' === pathName ? 'active' : ''}`}><Link to="/sales-report">Sales Report</Link></li>
                                        <li className={`${'/expenses-report' === pathName ? 'active' : ''}`}><Link to="/expenses-report">Expenses Report</Link></li>
                                        <li className={`${'/profit-loss-report' === pathName ? 'active' : ''}`}><Link to="/profit-loss-report">Profit &amp; Loss Report</Link></li>
                                        <li className={`${'/taxs-report' === pathName ? 'active' : ''}`}><Link to="/taxs-report">Taxs Report</Link></li>
                                    </ul>
                                    : ""
                                }
                            </li>
                            <li className={`${'/settings' === pathName || '/preferences' === pathName || '/tax-types' === pathName || '/expense-category' === pathName || '/notifications' === pathName || '/change-password' === pathName || '/delete-account' === pathName ? 'active' : ''}`}>
                                <Link to="/settings"><FeatherIcon icon="settings" /> <span>Settings</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Scrollbars>
        </div>

    );

}
export default withRouter(Sidebar);