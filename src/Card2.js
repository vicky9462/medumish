import React from 'react'
import { NavLink } from 'react-router-dom';
import Customlogo from './Customlogo';

function Card2(props) {
    return (
        <div className="card">
                <NavLink to="/post">
                    <img className="img-fluid" src={props.src}  alt=""/>
                    
                </NavLink>
                <div className="card-block">
                    <h2 className="card-title"><NavLink to="/post">{props.head1}</NavLink></h2>
                    <h4 className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                    <div className="metafooter">
                        <div className="wrapfooter">
                            <span className="meta-footer-thumb">
                            <NavLink to="/author"><img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/></NavLink>
                            </span>
                            <span className="author-meta">
                            <span className="post-name"><NavLink to="/author">Sal</NavLink></span><br/>
                            <span className="post-date">22 July 2017</span><span className="dot"></span><span className="post-read">6 min read</span>
                            </span>
                            <span className="post-read-more"><NavLink to="/post" title="Read Story"><Customlogo/></NavLink></span>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Card2;
