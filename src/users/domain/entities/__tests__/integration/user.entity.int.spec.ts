import { UserDataBuilder } from '../../../../../users/domain/testing/helpers/user-data-build';
import { UserEntity, UserProps } from '../../user.entity';
import { EntityValidationError } from '../../../../../shared/domain/errors/validation-error';

describe('Constructor method', () => {
  it('Should throw an error when creating a user with invalid name', () => {
    let props: UserProps = {
      ...UserDataBuilder({}),
      name: null as any,
    };
    expect(() => new UserEntity(props)).toThrow(EntityValidationError);

    props = {
      ...UserDataBuilder({}),
      name: '',
    };
    expect(() => new UserEntity(props)).toThrow(EntityValidationError);

    props = {
      ...UserDataBuilder({}),
      name: 'a'.repeat(256),
    };
    expect(() => new UserEntity(props)).toThrow(EntityValidationError);
  });
});
