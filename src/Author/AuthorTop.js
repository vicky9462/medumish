import React from 'react'
import AuthorPost from './AuthorPost';

function AuthorTop() {
    return (
        <>
        <div className="container">
	<div className="row">
		<div className="col-md-2"></div>
		<div className="col-md-8 col-md-offset-2">
			<div className="mainheading">
				<div className="row post-top-meta authorpage">
					<div className="col-md-10 col-xs-12">
						<h1>Sal</h1>
						<span className="author-description">Founder of <a  href="https://www.wowthemes.net">WowThemes.net</a> and creator of <strong>"Mediumish"</strong> theme that you're currently previewing. I professionally develop premium themes, templates & scripts since the Apocalypse (2012). You can reach me out on the social links below.</span>
						<div className="sociallinks"><a  target="_blank" href="https://www.facebook.com/wowthemesnet/"><i className="fa fa-facebook"></i></a> <span className="dot"></span> <a target="_blank" href="https://plus.google.com/s/wowthemesnet/top"><i className="fa fa-google-plus"></i></a></div>
						<a target="_blank" href="https://twitter.com/wowthemesnet" className="btn follow">Follow</a>
					</div>
					<div className="col-md-2 col-xs-12">
						<img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<AuthorPost/>
</>)
}

export default AuthorTop
