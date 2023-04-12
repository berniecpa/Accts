import React, {useState,useEffect} from "react";
import { Route, BrowserRouter as Router, Switch,useLocation  } from "react-router-dom";
import Dashboard from './dashboard/Index';
import Indextwo from './dashboard/Indextwo';
import Indexthree from './dashboard/Indexthree';
import Indexfour from './dashboard/Indexfour';
import Indexfive from './dashboard/Indexfive';
import Customers from './customers/Index';
import AddCustomer from './customers/AddCustomer';
import EditCustomer from './customers/EditCustomer';
import Expenses from './expenses/Index';
import AddExpenses from './expenses/AddExpenses';
import EditExpenses from './expenses/EditExpenses';
import Estimates from './estimates/Index';
import AddEstimate from './estimates/AddEstimate';
import EditEstimate from './estimates/EditEstimate';
import ViewEstimate from './estimates/ViewEstimate';
import Invoices from './invoices/Index';
import Invoicedetails from './invoices/Invoicedetails';
import Invoicesettings from './invoices/Invoicesettings';
import Invoicegrid from './invoices/Invoicegrid';
import Taxsettings from './invoices/Taxsettings';
import Invoicerecurring from './invoices/Invoicerecurring';
import Invoicecancelled from './invoices/Invoicecancelled';
import Invoicepaid from './invoices/Invoicepaid';
import Invoiceoverdue from './invoices/Invoiceoverdue';
import Banksettings from './invoices/Banksettings';
import ViewInvoice from './invoices/ViewInvoice';
import AddInvoice from './invoices/AddInvoice';
import EditInvoice from './invoices/EditInvoice';
import Invoicedraft from './invoices/Invoicedraft';
import Payments from './payments/Index';
import AddPayments from './payments/AddPayments';
import ProfileSettings from './settings/Profile';
import Preferences from './settings/Preferences';
import TaxTypes from './settings/TaxTypes';
import ExpenseCategory from './settings/ExpenseCategory';
import Notifications from './settings/Notifications';
import ChangePassword from './settings/ChangePassword';
import DeleteAccount from './settings/DeleteAccount';
import Chat from './application/Chat';
import Calendar from './application/Calendar';
import Inbox from './application/Inbox';
import Profile from './profile/Index';
import Login from './authentication/Login';
import Register from './authentication/Register';
import ForgotPassword from './authentication/ForgotPassword';
import LockScreen from './authentication/LockScreen';
import Page404 from './errorpages/404';
import Page500 from './errorpages/500';
import BlankPage from './blankpage/Index';
import Users from './users/Index';
import Components from './components/Index';
import BasicInputs from './forms/BasicInputs';
import FormInputGroups from './forms/FormInputGroups';
import HorizontalForm from './forms/HorizontalForm';
import VerticalForm from './forms/VerticalForm';
import FormMask from './forms/FormMask';
import FormValidation from './forms/FormValidation';
import VectorMaps from './vectormaps/Index';
import BasicTables from './tables/BasicTables';
import DataTables from './tables/DataTables';
import SalesReport from './reports/salesreport';
import ExpenseReport from './reports/expense';
import ProfitlossReport from './reports/profitloss';
import Taxreport from './reports/taxreport';
import StickySidebar from './layouts/StickySidebar'
import config from 'config';


const AppContainer =  (props) => {
 
 
    return (
      <Router basename={`${config.publicPath}`}>
                 <StickySidebar />                                           
            <Switch>    
                                             
              <Route path="/index" component={Dashboard} />
              <Route path="/indextwo" component={Indextwo} />
              <Route path="/indexthree" component={Indexthree} />
              <Route path="/indexfour" component={Indexfour} />
              <Route path="/indexfive" component={ Indexfive} />             
              <Route path="/customers" component={Customers} />
              <Route path="/add-customer" component={AddCustomer} />
              <Route path="/edit-customer" component={EditCustomer} />
              <Route path="/expenses" component={Expenses} />
              <Route path="/add-expenses" component={AddExpenses} />
              <Route path="/edit-expenses" component={EditExpenses} />
              <Route path="/estimates" component={Estimates} />
              <Route path="/add-estimate" component={AddEstimate} />
              <Route path="/edit-estimate" component={EditEstimate} />
              <Route path="/view-estimate" component={ViewEstimate} />
              <Route path="/invoices" component={Invoices} />
              <Route path="/invoice-details" component={Invoicedetails} />
              <Route path="/invoice-grid" component={Invoicegrid} />
              <Route path="/view-invoice" component={ViewInvoice} />
              <Route path="/add-invoice" component={AddInvoice} />
              <Route path="/edit-invoice" component={EditInvoice} />
              <Route path="/tax-settings" component={Taxsettings} /> 
              <Route path="/invoice-paid" component={Invoicepaid} /> 
              <Route path="/invoice-overdue" component={Invoiceoverdue} />                           
              <Route path="/bank-settings" component={Banksettings} />              
              <Route path="/invoices-settings" component={Invoicesettings} />
              <Route path="/invoice-draft" component={Invoicedraft} /> 
              <Route path="/invoice-recurring" component={Invoicerecurring} />  
              <Route path="/invoice-cancelled" component={Invoicecancelled} />                  
              <Route path="/payments" component={Payments} />
              <Route path="/add-payments" component={AddPayments} />
              <Route path="/settings" component={ProfileSettings} />
              <Route path="/sales-report" component={SalesReport} />
              <Route path="/expenses-report" component={ExpenseReport} />
              <Route path="/profit-loss-report" component={ProfitlossReport} />
              <Route path="/taxs-report" component={Taxreport} />
              <Route path="/preferences" component={Preferences} />
              <Route path="/tax-types" component={TaxTypes} />
              <Route path="/expense-category" component={ExpenseCategory} />
              <Route path="/notifications" component={Notifications} />
              <Route path="/change-password" component={ChangePassword} />
              <Route path="/delete-account" component={DeleteAccount} />
              <Route path="/chat" component={Chat} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/inbox" component={Inbox} />
              <Route path="/profile" component={Profile} />              
              <Route path="/error-404" component={Page404} />
              <Route path="/error-500" component={Page500} />
              <Route path="/blank-page" component={BlankPage} />
              <Route path="/users" component={Users} />
              <Route path="/components" component={Components} />
              <Route path="/form-basic-inputs" component={BasicInputs} />
              <Route path="/form-input-groups" component={FormInputGroups} />
              <Route path="/form-horizontal" component={HorizontalForm} />
              <Route path="/form-vertical" component={VerticalForm} />
              <Route path="/form-mask" component={FormMask} />
              <Route path="/form-validation" component={FormValidation} />
              <Route path="/maps-vector" component={VectorMaps} />
              <Route path="/tables-basic" component={BasicTables} />
              <Route path="/data-tables" component={DataTables} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/lock-screen" component={LockScreen} />
              
             
            </Switch>
             
      </Router>
    );
};

export default AppContainer;
