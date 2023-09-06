import * as React from 'react';
import {Button, Snackbar, IconButton, useMediaQuery} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide, { SlideProps } from '@mui/material/Slide';
import theme from '../theme';


type CookieSnackbarProps = 
{
    timeToWait: number;
}

type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props: TransitionProps) {
    return <Slide {...props} direction="up" />;
}

const HomeCookieSnackbar = ({timeToWait} : CookieSnackbarProps) =>
{
    const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));
    const [open, setOpen] = React.useState(false);
    const [cookieMode, setCookieMode] = React.useState<boolean>();

    const handleClick = (SelectedMode: boolean) => () => 
    {
        setOpen(false);
        setCookieMode(SelectedMode);
    }

    const cookieAction = (
        <React.Fragment>
          <Button color="primary" size="small" onClick={handleClick(true)}>
            Accept All
          </Button>
          <Button color="inherit" size="small" onClick={handleClick(false)}>
            Reject All
          </Button>
        </React.Fragment>
      );

    React.useEffect(() => {
        const timer = setTimeout(() => {
            //console.log('This will open after 2 seconds!')
            setOpen(true)
            console.log(`Passed open after true hopefully: ${open}`);
        }, timeToWait);

        return () => clearTimeout(timer);
      }, []);

      const messageBlock = (
        <div style={{
            display: 'flex',
            position: 'relative',
            width: '100%',
            alignItems: 'top',
          }}>
            <div>
                <p>We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.</p>
            </div>
            <div>
                <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClick(false)}
                >
                <CloseIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      );
      
      // console.log(`CookieMode: ${cookieMode}`);

    return (
        <div>
            <Snackbar
                anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
                open={open}
                onClose={handleClick(false)}
                message = {messageBlock}
                TransitionComponent={TransitionUp}
                action={cookieAction}
                sx={{
                    maxWidth: isDesktop ? '100%' : '30%',
                    //maxHeight: '25%',
                  }}
                key={TransitionUp.name}
            />
        </div>

    );
} 

export default HomeCookieSnackbar;