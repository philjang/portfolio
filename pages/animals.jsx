import axios from 'axios'

// when we get data from the server, it is available as props
export default function Animals({ data, otherProp }) {
    return (
        <>
            <h1>Random Animal: {data.animal}</h1>
            <p>{otherProp}</p>
        </>
    )
}

// export a function thats called 'getStaticProps'
// whatever is returned from this function
// becomes the 'data' prop in our components

export async function getStaticProps() {
    // we can do all of our ajax/axios/fetch here
    // we can call external APIs, express backends, next backend
    const { data } = await axios.get(`${process.env.SERVER_URL}/api/animals`) // .env.local is hidden from browser by default
    console.log(data) // goes to terminal, not server side

    // these props are available to us in the component
    return {
        props: { data, otherProp: 'hi!' }
    }
}