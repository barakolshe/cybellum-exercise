import { Button, CardMedia, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import cybellumSign from 'assets/images/login/cybellum-sign.svg';
import monitor from 'assets/images/login/imac-dig-twins.png';

const marginLinks = '40px';
/* 
  This is an expression to make the div always position well vertically
  527px the div height approximately
  This basically position the div in a 1:2 ratio from top to bottom
*/
const topMargin = `calc((100vh - ${marginLinks} - 527px) / 3)`;

export default function Login() {
  const bottomLinks = {
    'Privacy policy': '/privacy-policy',
    'Terms of use': '/terms-of-use',
    'Contact us': '/contact-us',
  };

  return (
    <>
      <Box
        sx={{
          ml: { xs: '0px', md: '91px', xl: '182px' },
          mt: { xs: '0px', md: topMargin },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: { xs: 'center', md: 'space-between' },
          gap: { xs: '60px', md: '0px' },
          alignItems: { xs: 'center', md: 'flex-start' },
        }}
      >
        <Box sx={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'inherit', gap: '36px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'inherit' }}>
            <CardMedia component="img" alt="Cybellum" image={cybellumSign} sx={{ width: '150.192px', height: '55px' }} />
            <Typography variant="h1" sx={{ whiteSpace: 'pre', textAlign: { xs: 'center', md: 'start' } }}>
              Welcome to the <br />
              Product Security Platform
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '400px' } }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '28px' }}>
              <TextField fullWidth label="Username" />
              <TextField fullWidth label="Password" type="password" />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '112px', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Button variant="hover" sx={{ fontSize: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0.1px', padding: '0.12rem 0.25rem' }}>
                Forgot your password?
              </Button>
              <Button variant="primary" sx={{ width: '100%' }}>
                Log in
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: marginLinks, width: { xs: '100%', md: '400px' } }}>
          {Object.keys(bottomLinks).map((link) => (
            <Button variant="hover" key={link}>
              {link}
            </Button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          postiion: 'relative',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'col',
          justifyContent: 'center',
          margin: `calc(${topMargin} / 2) auto`,
          padding: '0px 40px',
        }}
      >
        <CardMedia
          component="img"
          alt="Digital Twins"
          image={monitor}
          sx={{
            objectFit: 'contain',
          }}
        />
      </Box>
    </>
  );
}
