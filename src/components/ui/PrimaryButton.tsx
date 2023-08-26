import { Button, ButtonProps } from "@mui/material";
import { FC } from "react";

type PrimaryInputProps = ButtonProps & {};

const PrimaryButton: FC<PrimaryInputProps> = ({ sx, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        ...sx,
        display: "flex",
        borderRadius: "4px",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
        fontSize: "1rem",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "1.5rem" /* 150% */,
        letterSpacing: "0.15px",
        padding: "8px 12px",
        "&:hover": {
          flexShrink: 0,
          /* Elevation/light/1 */
          boxShadow:
            "0px 1px 3px 1px rgba(28, 27, 31, 0.15), 0px 1px 2px 0px rgba(28, 27, 31, 0.30)",
          backgroundColor: "secondary.main",
        },
      }}
    />
  );
};

export default PrimaryButton;
