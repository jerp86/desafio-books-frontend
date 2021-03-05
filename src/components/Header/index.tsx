import React from 'react';
import { FiLogOut } from 'react-icons/fi';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

import { ContainerLogo, HeaderContainer, HeaderTitle, Welcome } from './styles';

interface HeaderProps {
  color?: string;
}

const Header: React.FC<HeaderProps> = ({ color }: HeaderProps) => {
  const { user, signOut } = useAuth();

  return (
    <HeaderContainer color={color}>
      <ContainerLogo>
        <Logo />
        <HeaderTitle>Books</HeaderTitle>
      </ContainerLogo>

      {color && (
        <Welcome>
          <span>
            {`Bem vind${user.gender === 'M' ? 'o' : 'a'}`},{' '}
            <strong>{user.name}</strong>
          </span>

          <FiLogOut onClick={signOut} />
        </Welcome>
      )}
    </HeaderContainer>
  );
};

export default Header;
