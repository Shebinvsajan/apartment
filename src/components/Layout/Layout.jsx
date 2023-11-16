import React from 'react'
import Header from '../Header/Header'
import Home from '../Home/Home'
import About from '../About/About'
import Projects from '../Project/Projects'
import Form from '../contactform/Form'
import Icon from '../Icon/Icon'
import Footer from '../Footer/Footer'
import AlertForm from '../AlertForm/AlertForm'
import SecondCard from '../SecondCard/SecondCard'
import ApartCard from '../ApartCard/ApartCard'


function Layout() {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Projects />
            <ApartCard />

            <SecondCard/>
         
    


            <Form />

            <Footer />
            <AlertForm />
            <Icon />

        </>
    )
}

export default Layout