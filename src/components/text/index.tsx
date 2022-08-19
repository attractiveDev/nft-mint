import { Typography } from '@mui/material';



interface PropsType{
  title: string,
  size: string,
  color: string,
}

const Text = (props: PropsType) => {
  const { title, size , color } = props;
  return(
    <>
      <Typography
        sx={{fontFamily:'Love Ya Like A Sister',
              color: color,
              fontSize: size,  
        }}
      >
          {title}
      </Typography>
    </>
  );
}

export default Text;