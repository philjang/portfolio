// built in link for SSR optimization and SEO from next
import Link from "next/link"

export default function Navbar() {
    return (
        <nav>
            {/* can use anchor tags */}
            {/* unlike react-router-dom, where there is a 'to' attribute, this just has href like a tag */}
            <Link href='/'>
                {/* <a>Home</a> */}
                Home
            </Link>
            <Link href='/about'>
                {/* <a>About Me</a> */}
                About Me
            </Link>
        </nav>
    )
}