// import SSR caching image tag/component from next package
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <div className='flex-column container center mt-2'>
                <div className="d-flex align-items-center justify-content-around my-5 animate__animated animate__fadeIn">
                    <Image
                    className={styles.headshot}
                    src='/philJang.jpeg'
                    alt='headshot'
                    width={200}
                    height={200}
                    />
                    <h3 className='ms-5 animate__animated animate__fadeIn'>It's nice to meet you. I'm a fullstack developer based in Seattle.</h3>
                </div>
                <div className="d-flex flex-column align-items-center my-4">
                    <h4 className='mb-2 animate__animated animate__fadeIn'>Skills</h4>
                    <div className="container">
                        <div className="row">
                            <div className="col animate__animated animate__fadeInLeft mx-5">
                                <h5 className='my-4'>Languages and Extensions</h5>
                                <h6>Javascript</h6>
                                <h6>Python</h6>
                                <h6>HTML5</h6>
                                <h6>CSS</h6>
                                <h6>SQL</h6>
                                <h6>EJS</h6>
                            </div>
                            <div className="col animate__animated animate__fadeInRight mx-5">
                                <h5 className='my-4'>Database and Backend Technologies</h5>
                                <h6>PostgreSQL</h6>
                                <h6>Sequelize</h6>
                                <h6>MongoDB</h6>
                                <h6>Mongoose</h6>
                                <h6>Express.js</h6>
                                <h6>Node.js</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col animate__animated animate__fadeInLeft mx-5">
                                <h5 className='my-4'>Frameworks and Libraries</h5>
                                <h6>React.js</h6>
                                <h6>Django</h6>
                                <h6>Next.js</h6>
                                <h6>Bootstrap</h6>
                            </div>
                            <div className="col animate__animated animate__fadeInRight mx-5">
                                <h5 className='my-4'>Version Control and DevOps</h5>
                                <h6>Git</h6>
                                <h6>Github</h6>
                                <h6>Heroku</h6>
                                <h6>Netlify</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}