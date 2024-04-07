
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home  = () => {
const {data:blogs , ispending ,Error } =useFetch('http://localhost:5000/blogs');

/*const handleDelete =(id)=>{
const newBlogs = blogs.filter(blog =>blog.id !== id);
setBlogs(newBlogs);
}*/

return (  
    <div className="home">
        {Error && <div>{Error}</div>}
        {ispending && <div>Loadinng...</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
    </div>
); 
}
 
export default Home ;
