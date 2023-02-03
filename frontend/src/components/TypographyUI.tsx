import Typography from "@mui/material/Typography";

const TypographyUI = () => {
  return (
    <>
      <Typography variant="h1"> Header 1</Typography>
      <Typography variant="h2"> Header 2</Typography>
      <Typography variant="h3"> Header 3</Typography>
      <Typography variant="h4" gutterBottom>
        Header 4
      </Typography>
      <Typography variant="h5"> Header 5</Typography>
      <Typography variant="h6" component="h1">
        Header 6 (as h1)
      </Typography>
      <Typography variant="subtitle1"> Subtitle1 (h6)</Typography>
      <Typography variant="subtitle2"> Subtitle2 (h6)</Typography>
      <Typography variant="body1"> Body 1(p) </Typography>
      <Typography variant="body2"> Body 2 (p)</Typography>
      <Typography variant="button" display="block">
        button
      </Typography>
      <Typography variant="caption" display="block">
        caption
      </Typography>
      <Typography variant="overline" display="block">
        overline
      </Typography>
    </>
  );
};

export default TypographyUI;
