import * as React from 'react';
import { AuthButtonCard } from './AuthButton.styled';
import { Flex } from 'antd';

export type AuthButtonProps = {
  id: any,
  icon: React.ComponentType,
  name: string,
  onClick: (id: any) => void,
};

export function AuthButton({ icon: Icon, id, name, onClick }: AuthButtonProps) {
  return (
    <AuthButtonCard onClick={() => onClick(id)}>
      <Flex align='center' gap={15}>
        <Icon />
        <span>
          Continue with <label htmlFor={id}>{name}</label>
        </span>
      </Flex>
      </AuthButtonCard>
  );
}