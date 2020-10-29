import { Box, Button, Link, SimpleGrid } from '@chakra-ui/core';
import { MembersListItem } from './members-list-item';

export function MembersList() {
  return (
    <Box>
      <SimpleGrid columns={ [1, 2, 3, 4] } mt='40px' gridGap='15px' position='relative' maxHeight='500px' overflow='hidden'>
        <MembersListItem title='Kamran Ahmed' designation='Engineering Manager' company='Tradeling' imageUrl='/avatars/kamran.jpeg' />
        <MembersListItem title='Adnan Ahmed' designation='Engineering Manager' company='Tradeling' imageUrl='/avatars/adnan.jpeg' />
        <MembersListItem title='Zeeshan Ahmed' designation='Senior Software Engineer' company='Tradeling' imageUrl='/avatars/zeeshan.jpeg' />
        <MembersListItem title='Mohamed Meabed' designation='Chief Technology Officer' company='Tradeling' imageUrl='/avatars/meabed.png' />
        <MembersListItem title='Ahmed Moawad' designation='VP of Engineering' company='Tradeling' imageUrl='/avatars/ahmed.png' />
        <MembersListItem title='Mustafa Magdi' designation='Engineering Manager' company='Tradeling' imageUrl='/avatars/mustafa.jpeg' />
        <MembersListItem title='Hany' designation='Software Engineer' company='Tradeling' imageUrl='/avatars/hany.jpeg' />
        <MembersListItem title='Amad' designation='Software Engineer' company='Tradeling' imageUrl='/avatars/amad.jpeg' />
        {/*<MembersListItem title='Abdallah' designation='Software Engineer' company='Tradeling' imageUrl='/avatars/abdallah.jpeg' />*/ }
        {/*<MembersListItem title='Mohamed Sayed' designation='Software Engineer' company='Tradeling' imageUrl='/avatars/maradona.jpeg' />*/ }
        {/*<MembersListItem title='Segun Adebayo' designation='Design System Engineer' company='Tradeling' imageUrl='/avatars/segun.jpeg' />*/ }
        {/*<MembersListItem title='Pavlo Lompas' designation='Senior Software Engineer' company='Tradeling' imageUrl='/avatars/pavlo.jpeg' />*/ }
        {/*<MembersListItem title='Furqan Zafar' designation='FullStack Engineer' company='AlTayer' imageUrl='/avatars/furqan.jpeg' />*/ }
        {/*<MembersListItem title='Umar Mehmood' designation='Frontend Engineer' company='AlTayer' imageUrl='/avatars/umar.jpg' />*/ }
        {/*<MembersListItem title='Pranjal Baweja' designation='Software Engineer' company='Tradeling' imageUrl='/avatars/pranjal.jpeg' />*/ }
        <Box pointerEvents='none' position='absolute' bottom={ 0 } height='200px' width='100%' background='linear-gradient(180deg, transparent, black)' />
      </SimpleGrid>
      <Button mt='20px' bg='yellow.400' rounded='20px'  px='30px'>
        All members &rarr;
      </Button>
    </Box>
  );
}
