
import useFetch from "./useFetch";
import { useHistory,useParams } from "react-router-dom";


const BlogDetails = () => {
    const {id } = useParams();
    const  {data: blog ,error,ispending} = useFetch('http://localhost:5000/blogs/' + id);
    const history = useHistory();


    const handleClick = () =>{
fetch('http://localhost:5000/blogs/' +blog.id,{
  method: 'DELETE'
}).then(() => {
history.push('/');
})
    }
    


    









    
    return ( 
        <div className="blog-details">
            { ispending && <div>Loadinng....</div>}
            {error && <div>{error}</div>}
            {blog && (
              <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
              </article>  
            )}
        </div>
     );
}
 
export default BlogDetails;