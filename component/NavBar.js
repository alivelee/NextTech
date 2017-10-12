import React from 'react';
import Link from 'next/link';
import navStyle from '../styles/navStyle';
export default (props) => (
  <nav>
    <ul>
      <li><i className="fa fa-home" aria-hidden="true"></i><Link href='/topics'><a>Topics</a></Link></li>
      <li><i className="fa fa-archive" aria-hidden="true"></i><Link href='/collections'><a>Collections</a></Link></li>
      <li><i className="fa fa-clipboard" aria-hidden="true"></i><Link href='/posts'><a>Posts</a></Link></li>
      <li><i className="fa fa-commenting" aria-hidden="true"></i><Link href='/comments'><a>Comments</a></Link></li>
    </ul>
    <style jsx>{navStyle}</style>
  </nav>
);