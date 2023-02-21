import React from 'react'
import './blog.css'
import Article from "../../components/article/Article";
import { blog01,blog02,blog03,blog04,blog05 } from './import';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening we are blogging about it</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgURL={blog01} date="Feb 21 2023" title="GPT-3 and Open AI is the Future.Let us explore how it is?" />

        </div>
        <div className="gpt3__blog-container_groupB">
         <Article imgURL={blog02} date="Feb 21 2023" title="GPT-3 and Open AI is the Future.Let us explore how it is?"/>
          <Article imgURL={blog03} date="Feb 21 2023" title="GPT-3 and Open AI is the Future.Let us explore how it is?"/>
          <Article imgURL={blog04} date="Feb 21 2023" title="GPT-3 and Open AI is the Future.Let us explore how it is?"/>
          <Article imgURL={blog05} date="Feb 21 2023" title="GPT-3 and Open AI is the Future.Let us explore how it is?"/>
        </div>
      </div>

    </div>
  )
}

export default Blog;
