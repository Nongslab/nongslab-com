import React from 'react';
import Header from './component/layout/Header';
import Hero from './component/section/Hero';
import Separator from './component/section/Separator.jsx';
import About from './component/section/About.jsx';
import OurServices from './component/section/Our_services.jsx';
import AdditionalServices from './component/section/Additional_services.jsx';
import Work from './component/section/Work.jsx';
import WorkProcess from './component/section/Our_works.jsx';
import Contact from './component/section/Contact.jsx';
import Footer from './component/layout/Footer.jsx';

function App() {
    return (
        <div className="bg-white text-ink min-h-screen">
            <div className="noise-overlay" />
            <Header />
            <main>
                <Hero />
                <Separator />
                <About />
                <OurServices />
                <AdditionalServices />
                <Work />
                <WorkProcess />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
