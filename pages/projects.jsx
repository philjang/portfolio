import Image from "next/image";

export default function Projects() {
    return (
        <>
            <div className='flex-column center'>
                <h1>Projects</h1>
                <div className="d-flex">
                    <div className='screenshot-container'>
                        <Image
                        className='project-screenshot'
                        src='/p2.png'
                        alt='product screenshot'
                        layout='fill'
                        />
                    </div>
                    <div className="flex-column">
                        <h2>ad-Libitum</h2>
                        <h3>A fullstack application that allows users to save their favorite restaurants for future reference! Users can also save their favorite menu items and record notes on their experience.</h3>
                        <h4>Github: <a target='_blank' rel="noreferrer" href='https://github.com/philjang/ad-libitum'><i className="fas fa-external-link-alt"></i></a></h4>
                        <h4>Deployed Site: <a target='_blank' rel="noreferrer" href='https://ad-libitum-deploy.herokuapp.com'><i className="fas fa-external-link-alt"></i></a></h4>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="flex-column">
                        <h2>A Day in the Life</h2>
                        <h3>A Day in the Life is a website that aims to make casual photo sharing more engaging again.</h3>
                        <h4>Github: <a target='_blank' rel="noreferrer" href='https://github.com/philjang/day-in-life-client'><i className="fas fa-external-link-alt"></i></a></h4>
                        <h4>Deployed Site: <a target='_blank' rel="noreferrer" href='https://gregarious-starlight-3d969a.netlify.app'><i className="fas fa-external-link-alt"></i></a></h4>
                    </div>
                    <div className='screenshot-container'>
                        <Image
                        className='project-screenshot'
                        src='/p3.png'
                        alt='product screenshot'
                        layout='fill'
                        />
                    </div>
                </div>
                <div className="d-flex">
                    <div className='screenshot-container'>
                        <Image
                        className='project-screenshot'
                        src='/p1.png'
                        alt='product screenshot'
                        layout='fill'
                        />
                    </div>
                    <div className="flex-column">
                        <h2>2D-SideScrol</h2>
                        <h3>Simple video games always send me back to childhood. Many popular games today emphasize complexity and realism, but some of the games that provided me with the most enjoyment were quite simple.</h3>
                        <h4>Github: <a target='_blank' rel="noreferrer" href='https://github.com/philjang/2D-SideScrol'><i className="fas fa-external-link-alt"></i></a></h4>
                        <h4>Deployed Site: <a target='_blank' rel="noreferrer" href='https://philjang.github.io/2D-SideScrol'><i className="fas fa-external-link-alt"></i></a></h4>
                    </div>
                </div>
            </div>  
        </>
    )
}