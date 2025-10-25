import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '../../../testing/helpers/user-data-build';
describe('UserEntity unit test', () => {
  let props: UserProps;
  let sut: UserEntity;
  beforeEach(() => {
    UserEntity.validate = jest.fn();
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });
  it('Contructor method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props).toBeDefined();
    expect(sut.props.name).toBe(props.name);
    expect(sut.props.email).toBe(props.email);
    expect(sut.props.password).toBe(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(sut.name).toBeDefined();
    expect(sut.name).toBe(props.name);
    expect(typeof sut.name).toBe('string');
  });

  it('Setter of name field', () => {
    sut['name'] = 'other name';
    expect(sut.name).toBe('other name');
    expect(typeof sut.name).toBe('string');
  });

  it('Getter of email field', () => {
    expect(sut.email).toBeDefined();
    expect(sut.email).toBe(props.email);
    expect(typeof sut.email).toBe('string');
  });

  it('Getter of password field', () => {
    expect(sut.password).toBeDefined();
    expect(sut.password).toBe(props.password);
    expect(typeof sut.password).toBe('string');
  });

  it('Setter of password field', () => {
    sut['password'] = 'other password';
    expect(sut.password).toBe('other password');
    expect(typeof sut.password).toBe('string');
  });

  it('Getter of createdAt field', () => {
    expect(sut.createdAt).toBeDefined();
    expect(sut.createdAt).toBeInstanceOf(Date);
  });

  it('Should update user', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    sut.update('other name');
    expect(sut.name).toEqual('other name');
  });

  it('Should update password', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    sut.updatePassword('other password');
    expect(sut.password).toEqual('other password');
  });
});
