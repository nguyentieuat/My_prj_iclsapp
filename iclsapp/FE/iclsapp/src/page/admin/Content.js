import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import SlideImages from './SlideImages';
import Card from './Card';
import './assets/css/portal.css';

const Content = () => {
    return (
        <>
            <div className="app-content pt-3 p-md-3 p-lg-4">
                <div className="container-xl">

                    <div className="row g-4 mb-4">
                        <Card title="Total Sales" statsFigure="$12,628" statsMeta="20%" status="up" />

                        <Card title="Expenses" statsFigure="$2,250" statsMeta="5%" status="down" />

                        <Card title="Projects" statsFigure="23" statsMeta="Open" />

                        <Card title="Invoices" statsFigure="6" statsMeta="New" />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Content;
