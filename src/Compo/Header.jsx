import React from 'react'
import {Button,HStack} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

const Header = () => {
  return <>
  
  <HStack p={'4'} shadow={'base'} bgColor={'Black'} fontFamily={'cursive'} >
    <Button variant={'unstyled'} color={'white'} m={['2','4']}>
        <Link to='/'>Home</Link>
    </Button>
    <Button variant={'unstyled'} color={'white'} m={['2','4']}>
        <Link to='/exchanges'>Exchanges</Link>
    </Button>
    <Button variant={'unstyled'} color={'white'} m={['2','4']}>
        <Link to='/coins'>Coins</Link>
    </Button>
  </HStack>
  </>
}

export default Header