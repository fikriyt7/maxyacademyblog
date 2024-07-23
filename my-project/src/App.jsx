import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import Events from './components/Events';
import Bootcamp from './components/Bootcamp';
import Blog from './components/Blog';
import SuccessStories from './components/SuccessStories';
import Utama from './components/Utama';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';

function App() {
    const utamaRef = useRef(null);
    const coursesRef = useRef(null);
    const eventsRef = useRef(null);
    const bootcampRef = useRef(null);
    const blogRef = useRef(null);
    const successStoriesRef = useRef(null);
    const FooterRef = useRef(null);
    const TestimonialRef = useRef(null);

    const refs = {
        utamaRef,
        coursesRef,
        eventsRef,
        bootcampRef,
        blogRef,
        successStoriesRef,
        FooterRef,
        Testimonial
    };

    return (
        <div className="bg-gray-100">
            <Navbar refs={refs} />
            <main>
                <section ref={utamaRef}>
                    <Utama />
                </section>
                <section ref={coursesRef}>
                    <Courses />
                </section>
                <section ref={eventsRef}>
                    <Events />
                </section>
                <section ref={blogRef}>
                    <Blog />
                </section>
                <section ref={TestimonialRef}>
                    <Testimonial />
                </section>
                <section ref={bootcampRef}>
                    <Bootcamp />
                </section>
                <section ref={successStoriesRef}>
                    <SuccessStories />
                </section>
                <section ref={FooterRef}>
                    <Footer />
                </section>
            </main>
         
        </div>
    );
}

export default App;
