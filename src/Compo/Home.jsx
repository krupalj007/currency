import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import btc from '../assets/btc.png'
import {motion} from 'framer-motion'
 
const Home = () => {
  return <Box bgColor={'blackAlpha.200'} w={'full'} h={['88vh','85vh']}>
<motion.div style={{
  height:'80vh',
}}

animate={{
translateY: '30px',
}}

transition={{
  duration:'3',
  repeat:'Infinity',
  repeatType:'reverse',
}}


>



<Image h={'full'} w={'full'} objectFit={'contain'} src={btc} />
</motion.div>
<Text fontSize={['2xl','6xl']} textAlign={'center'} fontWeight={'thin'}  mt={'-19.8'} color={'gray.400'}>𝐊𝐈𝐒𝐇𝐀𝐍 𝐏𝐀𝐓𝐄𝐋</Text>
  </Box>
  
}

export default Home