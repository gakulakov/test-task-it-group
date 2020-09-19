import React from 'react';
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Service from "./components/Services/Service";
import Section from "./components/common/Section/Section";
import AboutUs from "./components/AboutUs/AboutUs";
import Client from "./components/Clients/Clients";
import Reviews from "./components/Reviews/Reviews";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Header/>
                <Slider/>
            <Section color={'#EBEBEB'}>
                <Service/>
            </Section>
            <Section color={'#fff'}>
                <AboutUs/>
            </Section>
            <Section color={'#EBEBEB'}>
                <Client />
            </Section>
            <Section color={'fff'}>
                <Reviews />
            </Section>
                <Contacts />
                <Footer />
        </div>
    );
}

export default App;
