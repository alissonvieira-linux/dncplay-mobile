import React, { useState } from 'react';
import * as S from './styles';

import { Input } from '~/components/Input';
import { Button } from '~/components/Button';

import { useAuth } from '~/hooks/useAuth';

export function CreateProfile() {
  const [username, setUsername] = useState('');
  const { addUser, isLoading } = useAuth();

  return (
    <S.Container>
      <Input
        placeholder="Digite um nome para seu perfil"
        value={username}
        onChangeText={setUsername}
      />

      <S.WrapperButton>
        <Button
          title="Salvar e acessar"
          onPress={() => addUser(username)}
          isLoading={isLoading}
        />
      </S.WrapperButton>
    </S.Container>
  );
}
