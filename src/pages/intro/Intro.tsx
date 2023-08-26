import { Card, CardContent, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getApprovedNotification } from "api/notifications/notifications";
import { RootState } from "app/store";
import { useSelector } from "react-redux";
import Styled from "./intro.styled";

export default function Intro() {
  const accessToken = useSelector((state: RootState) => state.user.accessToken);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getApprovedNotification"],
    queryFn: () =>
      getApprovedNotification({ Authorization: `Bearer ${accessToken}` }),
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  let main = null;
  if (isLoading) {
    main = <CircularProgress />;
  } else if (isError) {
    main = <Typography color="error.main">Error</Typography>;
  } else {
    main = <Typography variant="h1">{data.title}</Typography>;
  }

  return (
    <Styled.Box>
      <Card sx={{ maxWidth: 345, textAlign: "center" }}>
        <CardContent>{main}</CardContent>
      </Card>
    </Styled.Box>
  );
}
