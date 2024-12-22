import ScreenWrapper from 'components/ScreenWrapper';
import { useState } from 'react';
import { Searchbar } from 'react-native-paper';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ScreenWrapper>
      <Searchbar value={searchQuery} onChangeText={setSearchQuery} />
    </ScreenWrapper>
  );
}
