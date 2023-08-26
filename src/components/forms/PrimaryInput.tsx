import { TextField, TextFieldProps } from "@mui/material";
import HoverButton from "components/ui/HoverButton";
import { FC } from "react";

type PrimaryInputProps = TextFieldProps & {
  lowerButton?: {
    text?: string;
    onClick?: () => void;
  };
};

const PrimaryInput: FC<PrimaryInputProps> = ({ lowerButton, sx, ...props }) => {
  return (
    <>
      <TextField
        {...props}
        sx={{
          ...sx,
          ".MuiInputBase-root": {
            padding: "0.25rem 1rem",
            height: "3rem",
            ".MuiSvgIcon-root": {
              display: "none",
            },
            "&.Mui-error": {
              ".MuiSvgIcon-root": {
                color: "error.main",
                display: "inline-block",
              },
            },
          },
          ".MuiInputBase-input": {
            padding: "0rem !important",
            margin: "0.5rem 0rem",
            height: "1.5rem",
          },
          ".MuiInputLabel-root": {
            fontSize: "0.875rem;",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "1.25rem" /* 142.857% */,
            letterSpacing: "0.25px",
            color: "text.secondary",
            marginLeft: "16px",
            "&.Mui-error": {
              color: "error.main",
            },
          },
          ".MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "outline.main",
            },
            "&.Mui-error fieldset": {
              borderColor: "error.main",
            },
          },
          ".MuiFormHelperText-root": {
            fontSize: "0.8125rem",
            margin: "0px",
            padding: "4px 0px 12px 0px",
          },
        }}
      />
      {lowerButton && (
        <HoverButton
          sx={{
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
            letterSpacing: "0.1px",
            padding: "0.12rem 0.25rem",
          }}
          onClick={lowerButton?.onClick}
        >
          {lowerButton?.text}
        </HoverButton>
      )}
    </>
  );
};

export default PrimaryInput;
