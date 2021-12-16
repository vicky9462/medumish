import React from 'react'
import AuthorCard from './AuthorCard'
import Footer from '../Footer';
import AuthorTwit from '../AuthorTwit';

function AuthorPost() {
    return (
        <>
        <div className="graybg authorpage">
        <div className="container">
            <div className="listrecent listrelated">

         

            <AuthorCard
            authorsrc="assets/img/demopic/8.jpg"
            authorhead="Life is worth living forever and ever"/>
    
                   
            <AuthorCard
            authorsrc="assets/img/demopic/10.jpg"
            authorhead="Best European capitals to visit and the costs implied"/>
                           <AuthorCard
            authorsrc="assets/img/demopic/9.jpg"
            authorhead="10 Things you should learn before visiting"/>
                
            
    
            </div>
        </div>
    </div>
    <AuthorTwit/>
   
<Footer/>
    
    </>)
}

export default AuthorPost
