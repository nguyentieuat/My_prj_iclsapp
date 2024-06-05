import React from 'react';
import { BrowserRouter, Routes, Route, Switch, Outlet, Link } from "react-router-dom";
import './assets/css/portal.css';
import './assets/css/custom.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import SlideImages from './SlideImages';
import { Helmet } from 'react-helmet';
import InfoOverview from './InfoOverview';
import ImageResultTopik from './ImageResultTopik';
import StudentComments from './StudentComments';
import Partner from './Partner';

const Admin = () => {
    return (
        <>
            {/* <BrowserRouter> */}
            <Header />
            <div className="app-wrapper">

                <Routes>
                    <Route path="" element={<Content />} />
                    <Route path="slides" element={<SlideImages />} />
                    <Route path="info_overview" element={<InfoOverview />} />
                    <Route path="image_result_topik" element={<ImageResultTopik />} />
                    <Route path="student_cmt" element={<StudentComments />} />
                    <Route path="partner" element={<Partner />} />
                </Routes>

                <Footer />
            </div>
            <Outlet />
            <Helmet> 
            </Helmet>
        </>
    );
}

export default Admin;
