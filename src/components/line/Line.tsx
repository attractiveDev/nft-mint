



interface propsType{
  img: string,
}

const Line = (props: propsType) => {
  const { img } = props;
  return(
    <>
      <div style={{display:'flex', justifyContent:'center'}}>
        <img src={img} style={{width:'85%'}} />
      </div>
    </>
  );
}

export default Line;