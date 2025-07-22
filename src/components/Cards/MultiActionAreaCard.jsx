import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Divider } from "@mui/material";

export default function MultiActionAreaCard({
  equipmentName,
  description,
  equipmentImage,
  itemCount,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={equipmentImage}
          alt={equipmentName}
        />
        <CardContent sx={{ flexGrow: 1, // Allows CardContent to take up available space
            display: 'flex', flexDirection: 'column', minHeight: 250, justifyContent: "space-between" }}>
          <div>
            <Typography gutterBottom variant="h5" component="div">
              {equipmentName}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {description}
            </Typography>
          </div>
          <div>
            <Divider
              sx={{
                my: 1, // Vertical Margin!!
              }}
            />
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Item Count : {itemCount}
            </Typography>
          </div>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}
