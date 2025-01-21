import { Button as MUIButton, ButtonProps } from '@mui/material';

export const Button = (props: ButtonProps) => {
  return <MUIButton variant='contained' {...props} />;
};
