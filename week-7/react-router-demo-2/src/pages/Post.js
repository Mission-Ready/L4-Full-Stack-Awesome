import { useParams } from 'react-router-dom';

function Post() {
  const params = useParams();
  return (
    <div style={{ border: '2px dotted blueviolet' }}>
      This page will show post number : {params.postID}
    </div>
  );
}

export default Post;
