import { useParams } from "react-router-dom"


export default function BlogPostPage() {
  const { id } = useParams();

  return(<>
    {id}
  
  </>)
}