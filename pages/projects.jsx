import Image from "next/image";

export default function Projects() {
    return (
        <>
            <div className='flex-column center'>
                <h1 className='my-5 animate__animated animate__fadeIn'>Projects</h1>
                <div className="container">
                    <div className="row mb-4">
                        {/* <div className="col"> */}
                            <div className='screenshot-container animate__animated animate__fadeInLeft'>
                                <Image
                                className='project-screenshot'
                                src='/p2.png'
                                alt='product screenshot'
                                layout='fill'
                                />
                            </div>
                        {/* </div> */}
                        <div className="col mx-5 animate__animated animate__fadeInLeft">
                            <h2>ad-Libitum</h2>
                            <h3>A fullstack application that allows users to save their favorite restaurants for future reference! Users can also save their favorite menu items and record notes on their experience.</h3>
                            <div className="row">
                                <div className="link col center mx-5 mt-2">
                                    <a target='_blank' rel="noreferrer" href='https://github.com/philjang/ad-libitum'><h5 className='mb-0'><i className="fab fa-github-alt"></i> Source Code</h5></a>
                                </div>
                                <div className="link col center mx-5 mt-2">
                                    <a target='_blank' rel="noreferrer" href='https://ad-libitum-deploy.herokuapp.com'><h5 className='mb-0'><i className="fas fa-globe"></i> Live Site</h5></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-5">
                        <div className="col mx-5 animate__animated animate__fadeInRight">
                            <h2>A Day in the Life</h2>
                            <h3>A Day in the Life is a website that aims to make casual photo sharing more engaging again. See what other's are posting by checking out their profiles and comment on their photos!</h3>
                            <div className="row">
                                <div className="link col center mx-5 mt-2">
                                    <a target='_blank' rel="noreferrer" href='https://github.com/philjang/day-in-life-client'><h5 className='mb-0'><i className="fab fa-github-alt"></i> Source Code</h5></a>
                                </div>
                                <div className="link col center mx-5 mt-2">
                                    <a target='_blank' rel="noreferrer" href='https://gregarious-starlight-3d969a.netlify.app'><h5 className='mb-0'><i className="fas fa-globe"></i> Live Site</h5></a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col"> */}
                            <div className='screenshot-container animate__animated animate__fadeInRight'>
                                <Image
                                className='project-screenshot'
                                src='/p3.png'
                                alt='product screenshot'
                                layout='fill'
                                />
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="row my-4">
                        {/* <div className="col"> */}
                            <div className='screenshot-container animate__animated animate__fadeInLeft'>
                                <Image
                                className='project-screenshot'
                                src='/p1.png'
                                alt='product screenshot'
                                layout='fill'
                                />
                            </div>
                        {/* </div> */}
                        <div className="col mx-5 animate__animated animate__fadeInLeft">
                            <h2>2D-SideScrol</h2>
                            <h3>Simple video games always send me back to childhood. Many popular games today emphasize complexity and realism, but some of the games that provided me with the most enjoyment were quite simple.</h3>
                            <div className="row">
                                <div className="link col center mx-5 mt-2">
                                    <a target='_blank' rel="noreferrer" href='https://github.com/philjang/2D-SideScrol'><h5 className='mb-0'><i className="fab fa-github-alt"></i> Source Code</h5></a>
                                </div>
                                <div className="link col center mx-5 mt-2">
                                    <a target='_blank' rel="noreferrer" href='https://philjang.github.io/2D-SideScrol'><h5 className='mb-0'><i className="fas fa-globe"></i> Live Site</h5></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}