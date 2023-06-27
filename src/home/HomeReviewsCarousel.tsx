import * as React from 'react';
import * as _ from 'lodash';
import {
  Card,
  CardActionArea,
  CardContent,
  Dialog,
  Typography,
  useMediaQuery,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CloseIcon from '@mui/icons-material/Close';
import theme from '../theme';
import Container from '../components/Container';
import Carousel from '../components/Carousel';

const HomeReviewsCarousel = () => {
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('lg'));
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalInfo, setModalInfo] = React.useState<ReviewInfo>();

  const reviews = [
    {
      name: 'John D.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 5,
    },
    {
      name: 'Jane D.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 4.5,
    },
    {
      name: 'Bob G.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 5,
    },
    {
      name: 'Max C.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 3.5,
    },
    {
      name: 'Anjela O.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 5,
    },
    {
      name: 'Enrique V.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 4,
    },
    {
      name: 'Ana K.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 3,
    },
    {
      name: 'Sam S.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 5,
    },
    {
      name: 'Karen B.',
      title: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
      rating: 1,
    },
  ];

  const handleOpen = (info: ReviewInfo) => {
    setModalInfo(info);
    setModalOpen(true);
  };

  const reviewCards = reviews.map((review, index) => {
    return <ReviewCard key={index} info={review} onClick={handleOpen} />;
  });

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        width: '100%',
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      {modalOpen && (
        <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
          <div
            style={{
              alignItems: 'center',
              width: 400,
              maxHeight: 600,
              padding: 48,
              position: 'relative',
            }}
          >
            <CloseIcon
              style={{
                position: 'absolute',
                zIndex: 5,
                right: 16,
                top: 16,
                cursor: 'pointer',
              }}
              onClick={() => setModalOpen(false)}
            />
            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              {ratingToStars(modalInfo.rating).map((star, index) => {
                return (
                  <div key={index} style={{ display: 'inline' }}>
                    {star}
                  </div>
                );
              })}
            </div>
            <Typography
              variant="subtitle1"
              style={{
                fontStyle: 'italic',
                paddingBottom: 8,
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              "{modalInfo.title}"
            </Typography>
            <Typography gutterBottom variant="h5">
              {modalInfo.name}
            </Typography>
            <Typography variant="body2">{modalInfo.text}</Typography>
          </div>
        </Dialog>
      )}
      <Typography
        variant={isTablet ? 'h4' : 'h3'}
        color="primary"
        style={{ paddingBottom: 24 }}
      >
        See Our Reviews
      </Typography>
      <Carousel
        items={reviewCards}
        displayCount={isTablet ? 1 : isDesktop ? 2 : 3}
        slideByCount={isTablet ? 1 : isDesktop ? 2 : 3}
        style={{
          paddingBottom: 24,
        }}
      />
    </Container>
  );
};

type ReviewInfo = {
  rating: number;
  name: string;
  title: string;
  text: string;
};

type ReviewCardProps = {
  info: ReviewInfo;
  onClick: (props: ReviewInfo) => void;
};

const ratingToStars = (rating: number) => {
  let stars = [];
  const fullStars = rating % 1 !== 0 ? rating - 0.5 : rating;
  _.times(fullStars, () => {
    stars.push(<StarIcon color="secondary" />);
  });
  rating % 1 !== 0
    ? stars.push(<StarHalfIcon color="secondary" />)
    : rating !== 5
    ? stars.push(<StarBorderIcon color="secondary" />)
    : stars.push();
  _.times(5 - stars.length, () => {
    stars.push(<StarBorderIcon color="secondary" />);
  });
  return stars;
};

const ReviewCard = ({ info, onClick }: ReviewCardProps) => {
  return (
    <Card
      style={{ minWidth: 300, maxWidth: 300, margin: 9 }}
      onClick={() => onClick(info)}
    >
      <CardActionArea>
        <CardContent>
          <div style={{ paddingTop: 8 }}>
            {ratingToStars(info.rating).map((star, index) => {
              return (
                <div key={index} style={{ display: 'inline' }}>
                  {star}
                </div>
              );
            })}
          </div>
          <Typography
            variant="subtitle1"
            style={{ fontStyle: 'italic', paddingBottom: 8 }}
          >
            "{info.title}"
          </Typography>
          <Typography gutterBottom variant="h5">
            {info.name}
          </Typography>
          <Typography
            variant="body2"
            style={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              maxHeight: 80,
              display: '-webkit-box',
              wordWrap: 'break-word',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
            }}
          >
            {info.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default HomeReviewsCarousel;
