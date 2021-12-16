import React from 'react'
import AuthorTwit from '../AuthorTwit'
import Footer from '../Footer'
import PostAlert from './PostAlert'
import PostCard from './PostCard'

function Posts() {
    return (
        <>
        
<div class="graybg">
	<div class="container">
		<div class="row listrecent listrelated">
        <PostCard
            postSrc='assets/img/demopic/9.jpg'
            postHead="Best recreational places to visit on a holiday"
        />
        <PostCard
            postsrc="assets/img/demopic/8.jpg"
            postHead="How travelling can change your life"
        />
        <PostCard 
            postsrc="assets/img/demopic/7.jpg"
            postHead="Little red dress and a perfect summer"
        />

			
			
		</div>
	</div>
</div>
<AuthorTwit/>
<PostAlert/>
<Footer/>

        </>
       
    )
}

export default Posts
