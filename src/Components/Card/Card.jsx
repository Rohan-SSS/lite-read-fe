import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import slugify from "slugify";

export default function ImgMediaCard(props) {
  const cardLink = `/${slugify(props.title, {
    remove: /[*+~.()'"!:@]/g,
  }).toLowerCase()}`;
  return (
    <Card
      className="card"
      sx={{
        borderRadius: 0,
        backgroundColor: "#161616",
        marginBottom: "4vh",
        maxWidth: "94%",
        transition: "background-color 10ms ease",
        "&:hover": {
          backgroundColor: "#121212",
          "& img": {
            filter: "brightness(80%)",
          },
        },
      }}
      component={Link}
      to={{
        pathname: cardLink,
        state: { novel: props.novelData },
      }}
      style={{ textDecoration: "none" }}
    >
      <CardMedia
        component="img"
        alt={props.alt}
        height="400"
        image={props.imageUrl}
      />

      <CardContent
        className="card-title"
        sx={{
          height: "80px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            width: "100%",
            fontWeight: "400",
            color: "#fff",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
}
