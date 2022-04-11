// import SSR caching image tag/component from next package
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <div className='flex-column center'>
                <div className="d-flex">
                    <Image
                    className={styles.headshot}
                    src='/philJang.jpeg'
                    alt='headshot'
                    width={200}
                    height={200}
                    />
                    <h3>It's nice to meet you. I'm a fullstack developer based in Seattle.</h3>
                </div>
                <div className="d-flex flex-column align-items center">
                <h4>Skills</h4>
                    <div className="d-flex">
                        <div className="flex-column center">
                            <h5>Languages and Extensions</h5>
                            <h6>Javascript</h6>
                            <h6>Python</h6>
                            <h6>HTML5</h6>
                            <h6>CSS</h6>
                            <h6>SQL</h6>
                            <h6>EJS</h6>
                            <h6>JSX</h6>
                        </div>
                        <div className="flex-column center">
                            <h5>Frameworks and Libraries</h5>
                            <h6>React.js</h6>
                            <h6>Next.js</h6>
                            <h6>Bootstrap</h6>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="flex-column center">
                            <h5>Version Control and DevOps</h5>
                            <h6>Git</h6>
                            <h6>Github</h6>
                            <h6>Heroku</h6>
                            <h6>Netlify</h6>
                        </div>
                        <div className="flex-column center">
                            <h5>Database and Backend Technologies</h5>
                            <h6>PostgreSQL</h6>
                            <h6>Sequelize</h6>
                            <h6>MongoDB</h6>
                            <h6>Mongoose</h6>
                            <h6>Express.js</h6>
                            <h6>Node.js</h6>
                        </div>
                    </div>
                </div>
                
            </div>  
        </>
    )
}