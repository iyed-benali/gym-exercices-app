import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Details from './Details'
import Videos from './Videos'
import SimilarExer from './SimilarExer'

import { options, fetchData,optionsYoutube } from '../utils/fetchData'

const ExerciceDetails = () => {
  const [exerciceDetail, setExericeDetail] = useState({})
  const [video,setVideo]=useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const ExercicesUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const ExericeData = await fetchData(`${ExercicesUrl}/exercises/exercise/${id}`, options)

      const YoutubeData=await fetchData(`${youtubeSearchUrl}/search?query=${ExericeData.name}`,optionsYoutube)
      
      const targetMuscleExercisesData = await fetchData(`${ExercicesUrl}/exercises/target/${ExericeData.target}`, options);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${ExercicesUrl}/exercises/equipment/${ExericeData.equipment}`, options);
      setEquipmentExercises(equimentExercisesData);
       setVideo(YoutubeData) 
      setExericeDetail(ExericeData)
    
    }
    fetchDataFromAPI();
  }, [id])
  return (
    <div>
      <Box>
        <Details exerciceDetail={exerciceDetail} />
        <Videos video={video} name={exerciceDetail.name} />
        <SimilarExer  targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
      </Box>
    </div>
  )
}

export default ExerciceDetails
