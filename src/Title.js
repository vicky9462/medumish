import React from 'react'
import Card1 from './Card1';
import Card2 from './Card2';
import Footer from './Footer';
import NavBar from './NavBar';

const Title = () => {
    return (<>
        <NavBar/>
        <div className="container">
            <div className="mainheading">
                <h1 className="sitetitle">Mediumish</h1>
                <p className="lead">
                    Bootstrap theme, medium style, simply perfect for bloggers
                </p>
            </div>
            <section className="featured-posts">
                <div className="section-title">
                    <h2><span>Featured</span></h2>
                </div>
                <div className="card-columns listfeaturedtag">

                    <Card1
                        // img="assets/img/demopic/1.jpg"
                        h1="We're living some strange times"
                        src="assets/img/demopic/1.jpg"
                        h2="Steve"
                    />
                    <Card1
                        // img="assets/img/demopic/1.jpg"
                        h1="The beauty of this world is in your heart"
                        src="assets/img/demopic/2.jpg"
                        h2="Jane"
                    />

                    <Card1
                        // img="assets/img/demopic/1.jpg"
                        h1="Dreaming of Las Vegas Crazyness"
                        src="assets/img/demopic/3.jpg"
                        h2="Mary"
                    />
                    <Card1
                        // img="assets/img/demopic/1.jpg"
                        h1="San Francisco at its best view in all seasons"
                        src="assets/img/demopic/4.jpg"
                        h2="Sal"
                    />

                </div>
            </section>

            <section className="recent-posts">
                <div className="section-title">
                    <h2><span>All Stories</span></h2>
                </div>
                <div className="card-columns listrecent">

                    <Card2
                        src="assets/img/demopic/5.jpg"
                        head1="Autumn doesn't have to be nostalgic, you know?"
                    />
                    <Card2
                        src="assets/img/demopic/6.jpg"
                        head1="Best galleries in the world with photos"
                    />
                    <Card2
                        src="assets/img/demopic/7.jpg"
                        head1="Little red dress and a perfect summer"
                    />
                    <Card2
                        src="assets/img/demopic/8.jpg"
                        head1="Thinking outside the box can help you prosper"
                    />
                    <Card2
                        src="assets/img/demopic/9.jpg"
                        head1="10 Things you should know about choosing your house"
                    />
                    <Card2
                        src="assets/img/demopic/10.jpg"
                        head1="Visiting the world means learning cultures"
                    />
                </div>
            </section>
            <Footer />
        </div>
        
</>    )
}

export default Title;
