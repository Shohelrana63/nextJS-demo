export default function post({post}){
    console.log("post")
    return (
        <div>
            <h1>Post Titles & Body</h1>
            <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        </div>
    )
}

export async function getStaticProps({params}){
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();
    return{
        props: {
            post,
        }
    }
}


export async function getStaticPaths(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    const paths = [];
    posts.forEach((post) => paths.push(`/posts/${post.id}`));
    return {
            paths,
            fallback: true,
    }
}