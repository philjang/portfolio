export default function Contact() {
    return (
        <>
            <div className='d-flex flex-column center'>
                <h1 className='my-5 animate__animated animate__fadeIn'>Let&apos;s get in touch.</h1>
                <div className='contacts d-flex flex-column justify-content-around'>
                    <a href={`mailto: philjang.pr@gmail.com`}><i className='fas fa-envelope'></i> philjang.pr@gmail.com </a>
                    <p className='mb-0'><i className="fas fa-mobile-alt"></i> +1-(425)-345-5813</p>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/phil-jang'><i className='fab fa-linkedin'></i> phil-jang </a>
                    <a target="_blank" rel="noreferrer" href='https://github.com/philjang'><i className='fab fa-github'></i> philjang </a>
                    <a target="_blank" rel="noreferrer" href='/Phil Jang.pdf'><i className='fas fa-file-alt'></i> Download Resume </a>
                </div>
            </div>      
        </>
    )
}