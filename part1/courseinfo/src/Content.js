import Part from './Part';

const Content = (props) => {
  console.log('content:', props)

  return(
    <div>
      <Part part={ props.parts } />
    </div>
  );
}

export default Content;