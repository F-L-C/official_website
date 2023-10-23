/* eslint-disable indent */
import React from 'react'

const blogs = [
    {
        title: 'Blog Post 1',
        description: 'Description of Blog Post 1',
        url: 'https://blog-site.com/post-1',
    },
    {
        title: 'Blog Post 2',
        description: 'Description of Blog Post 2',
        url: 'https://blog-site.com/post-2',
    },
    {
        title: 'Blog Post 2',
        description: 'Description of Blog Post 2',
        url: 'https://blog-site.com/post-2',
    },
    {
        title: 'Blog Post 2',
        description: 'Description of Blog Post 2',
        url: 'https://blog-site.com/post-2',
    },
]

const BlogSection = () => {
    // Define the URL of your blog site
    const blogSiteUrl = 'https://your-blog-site.com'

    return (
        <section className="bg-white p-3 pt-10">
            <div className="container mx-auto p-10">
                <h2 className="font-semibold mb-4 text-4xl text-center">Blog</h2>
                <p className="text-lg text-gray-600 mb-6 text-center">
                    Welcome to our blog! Explore our latest articles and updates.
                </p>
                <div className='mx-auto grid-cols-1'>
                    <ul>
                        {blogs.map((blog, index) => (
                            <li key={index} className="mb-4 shadow-md bg-flc-green">
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold b-2">{blog.title}</h3>
                                    <p className="text-gray-600">{blog.description}</p>
                                    <a
                                        href={blog.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className=" shadow-sm px-4 py-2 rounded-md text-sm font-semibold hover:bg-flc-blue transition-all inline-block mt-2"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default BlogSection
