import { Button, ButtonProps } from '@mui/material';
import { FC } from 'react';

type PrimaryInputProps = ButtonProps & {};

const HoverButton: FC<PrimaryInputProps> = ({ sx, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        color: 'text.secondary',
        textAlign: 'center',
        fontSize: '1rem',
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: '1.5rem' /* 142.857% */,
        letterSpacing: '0.15px',
        padding: '0.25rem 0.5rem',
        whiteSpace: 'pre',
        ...sx,
        '&:hover': {
          backgroundColor: 'palette.button',
        },
      }}
    />
  );
};

export default HoverButton;
