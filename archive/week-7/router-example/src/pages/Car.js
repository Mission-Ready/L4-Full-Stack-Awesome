/* eslint-disable jsx-a11y/alt-text */
import { useParams } from 'react-router-dom';

function Car() {
  const { modelNo, color } = useParams();

  return (
    <div backgroundColor = {{color}}>
      <div>{modelNo === 'x' ? <img src="https://media.wired.co.uk/photos/606d9b03dbc4c121710a3d36/4:3/w_1708,h_1281,c_limit/tesla1.jpg" width="100%" /> : <></>}</div>
      <div>{modelNo === 's' ? <img src="https://www.driveline.co.nz/wp-content/uploads/2019/09/2019-Tesla-Model-S.jpg"  width="100%"/> : <></>}</div>
    </div>
  );
}

export default Car;
