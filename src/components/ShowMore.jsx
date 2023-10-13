import { Button } from '@chakra-ui/button'
import {Stack} from '@chakra-ui/react'
import usePropertyStore from "../utils/zustand";
import {moreItems} from '../constants/defaultIndex'

const ShowMore = () => {
    const { currentIndex,setCurrentIndex,hotelData} = usePropertyStore();

    const handleClick = () => {
        if(currentIndex + moreItems < hotelData.length) {
            setCurrentIndex(currentIndex + moreItems )
        } else {
            setCurrentIndex(hotelData.length)
        }
    }
    return currentIndex !== hotelData.length ? (
        <Stack align = "center">
        <Button variant='outline' colorScheme='blue' size='md' onClick={handleClick}>
            Show more
        </Button>
            
        </Stack>
    ) : null;   
}

export default ShowMore

  