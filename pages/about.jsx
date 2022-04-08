// import SSR caching image tag/component from next package
import Image from 'next/image'
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <h1 className={`${styles.tealText} center`}>hello from about</h1>
            <p>p tag example</p>
            {/* loading an image locally */}
            {/* an img tag would also work -- just no SSR caching */}
            <Image
                src='/vercel.svg'
                alt='vercel logo'
                width={200}
                height={200}
            />

            {/* loading an image from another hosting domain */}
            <Image
                src='https://placekitten.com/300/300'
                alt='cat'
                width={200}
                height={200}
            />
        </>
    )
}