import {Box, Badge, Image, Flex, Center } from '@chakra-ui/react'

export default function WeaponBox(params) {
  const property = {
    imageUrl: 'https://bungie.net/common/destiny2_content/icons/d16148d2696fab485de8dc0cfb407cd7.jpg',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center in the heart of historic Los Angeles',
    formattedPrice: '$1,900.00',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Flex maxW='15vw' height='9vh' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src={property.imageUrl} alt={property.imageAlt} width='4.5vw'/>
      <Box pl='1vw' pt='3' maxW='9.5vw' overflow='hidden'>
        <Box display='flex' alignItems='baseline'>
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            New
          </Badge>
          <Badge borderRadius='full' px='2' colorScheme='yellow'>
            异域
          </Badge>
          {/* <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.beds} beds &bull; {property.baths} baths
          </Box> */}
        </Box>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
          fontSize='1vw'
        >
          青龙协同之刃
        </Box>
        <Center>
          <Box as='span' color='gray.600' fontSize='sm' maxW='100%' isTruncated>
            个性文本信息11234567899999912312313999
          </Box>
        </Center>

      </Box>

    </Flex>
  )
}