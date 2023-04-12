import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledHeader = styled('h1')({
  fontSize: 32,
  fontWeight: 'bold',
  marginBottom: 20,
  textAlign: 'center',
  textTransform: 'uppercase',
});

const StyledLink = styled('a')({
  display: 'block',
  width: '100%',
  maxWidth: 300,
  height: 200,
  overflow: 'hidden',
  borderRadius: 8,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

const StyledImg = styled('img')({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
});

const Videos = ({ video, name }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  console.log(video.contents);

  if (!video.contents || video.contents.length === 0) {
    return <div>No videos found.</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledHeader>Watch {name} Exercise Videos</StyledHeader>
      <Stack sx={{ flexDirection: 'row' }} spacing={2}>
        {video.contents.slice(0, 5).map((item, index) => (
          <StyledLink
            key={index}
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImg
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
              width={item.video.thumbnails[0].width}
              height={item.video.thumbnails[0].height}
            />
          </StyledLink>
        ))}
      </Stack>
    </Box>
  );
};

export default Videos;
