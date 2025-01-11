import { useState } from "react"

import Header from "./components/Header"
import { BLOGS } from "./constent/blog"
import { CATEGORY } from "./constent/category"
import BlogList from "./components/blog/BlogList"

const App = () => {
    const [activeCategory, setActiveCategory] = useState('All Postes');
    const [authState,setAuthState]=useState<'Register' | 'Login'>('Register');

    return (
        <div>
            <Header authState={authState} setAuthState={setAuthState} />
            <div className="banner container-fluid mx-0 px-0">
                <div className="image-backdrop">
                    <img src="src/assets/Banner1.png" alt="banner image" className="img-fluid" />
                    <div className="overlay">

                    </div>
                    <div className="banner-text">
                        <h1 className="text-white">Computer Engineering</h1>
                        <p className="text-white">142,765 Computer Engineers follow this</p>
                    </div>
                </div>
            </div>
            <div className="container-xl mx-auto d-flex justify-content-between align-items-center mt-4 pb-2 border-bottom border-dark">
                <div>
                    {CATEGORY.map((item, index) => (
                        <span
                            key={index}
                            className={`px-2 category-item ${activeCategory === item ? 'active' : ''}`}
                            onClick={() => setActiveCategory(item)}
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <div className="px-2 d-flex align-items-center">
                    <button type="button" className="btn btn-light mx-2 d-flex align-items-center">
                        Write a Post
                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_839)">
                                <path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_839">
                                    <rect width="22" height="22" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button type="button" className="btn btn-primary d-flex align-items-center gap-x-2">
                        <svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z" fill="white" />
                        </svg>
                        <span className="ps-2">Join Group</span>
                    </button>
                </div>
            </div>


            <div className="container my-4">
                <div className="row">
                    {/* Left Section: Blogs */}
                    <div className="col-md-8">
                        {BLOGS.map((blog) => (
                            <BlogList blog={blog} />
                        ))}
                    </div>

                    {/* Right Section */}
                    <div className="col-md-4">
                        <div>
                            <div className="d-flex align-items-center mb-3">
                                <span className=" text-primary mr-2">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_842)">
                                            <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black" />
                                            <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_842">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </span>
                                <span>Noida, India</span>
                                <a href="#" className="ml-auto">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_848)">
                                            <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_848">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </a>
                            </div>
                            <div className="">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.5" clip-path="url(#clip0_1_853)">
                                        <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_853">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>

                                Your location will help us serve better and extend a personalized experience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default App