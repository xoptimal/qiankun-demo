import {useHistory} from "umi";

export default function IndexPage(props: any) {

  const history = useHistory()

  const handleJump = (path: string) => {
    history.push(path)
  }

  return (
    <div>
      <div style={{display: 'flex'}}>
        <button onClick={() => handleJump('/one')}>one
        </button>
        <button onClick={() => handleJump('/two')}>two
        </button>
      </div>
      {props.children}
    </div>
  );
}
