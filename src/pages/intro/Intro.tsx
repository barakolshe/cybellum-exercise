import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useNotificationQuery } from "api/notifications/notifications";
import Styled from "./intro.styled";

export default function Intro() {
  const { data, error, isLoading } = useNotificationQuery(1);

  let main = null;
  if (isLoading) {
    main = <CircularProgress />;
  } else if (error) {
    main = <Typography color="error.main">Error</Typography>;
  } else {
    main = <Typography variant="h1">{data?.title}</Typography>;
  }

  return (
    <Styled.Box>
      <Card sx={{ maxWidth: 345, textAlign: "center" }}>
        <CardContent>{main}</CardContent>
      </Card>
    </Styled.Box>
  );
}
