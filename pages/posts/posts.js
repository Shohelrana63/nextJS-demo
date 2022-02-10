import Link from 'next/link';
export default function post({posts}){
    console.log("post")
    return (
        <div>
            <h1>All Post Titles</h1>
            {
                posts.map((post) =>(
                   <div key={post.id}>
                       <li style={{marginLeft:"50px"}}>
                      <Link href={`/posts/${post.id}`}>{post.title}</Link> 
                       </li>
                   </div> 
                ))
            }
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    return{
        props: {
            posts
        }
    }
}