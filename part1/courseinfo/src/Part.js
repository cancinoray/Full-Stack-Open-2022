const Part = (prop) => {
  console.log('parts:', prop)
  return(
    <div>
    <p>
      { prop.parts }
    </p>
    </div>
  );
}

export default Part;