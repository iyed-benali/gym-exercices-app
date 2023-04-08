import React from 'react';
import { Box, Typography } from '@mui/material';
import { FaDumbbell } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoIosBody } from 'react-icons/io';
import BodyPart from './bodyPart.jsx';
const HorizentalScrollbar = ({ data,setBodyPart,bodyPart }) => {
  const getIcon = (item) => {
    switch (item.toLowerCase()) {
      case 'all':
        return <FaDumbbell size={20} />;
      case 'back':
        return <IoIosBody size={20} />;
      case 'cardio':
        return <AiOutlineHeart size={20} />;
      case 'chest':
        return <IoIosBody size={20} />;
      case 'lower arms':
        return <IoIosBody size={20} />;
      case 'lower legs':
        return <IoIosBody size={20} />;
      case 'neck':
        return <IoIosBody size={20} />;
      case 'shoulders':
        return <IoIosBody size={20} />;
      case 'upper arms':
        return <IoIosBody size={20} />;
      case 'upper legs':
        return <IoIosBody size={20} />;
      case 'waist':
        return <IoIosBody size={20} />;
      default:
        return <FaDumbbell size={20} />;
    }
  };

  return (
    <Box sx={{ display: 'flex', overflowX: 'scroll', py: 2 }}>
      {data.map((item, index) => (
        <Box
          key={index}
          sx={{
            minWidth: 120,
            height: 40,
            borderRadius: '50px',
            backgroundColor: '#f3f3f3',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 1,
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: '#000',
              color: '#fff',
            },
          }}
        >
          {getIcon(item)}
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </Box>
  );
};

export default HorizentalScrollbar;
