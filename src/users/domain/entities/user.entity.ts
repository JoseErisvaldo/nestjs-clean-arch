import { EntityValidationError } from 'src/shared/domain/errors/validation-error';
import { Entity } from '../../../shared/domain/entity';
import { UserValidatorFactory } from '../validators/user.validator';

export type UserProps = {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
};
export class UserEntity extends Entity<UserProps> {
  constructor(
    public readonly props: UserProps,
    id?: string,
  ) {
    UserEntity.validate(props);
    super(props, id);
    this.props.createdAt = props.createdAt || new Date();
  }

  update(value: string) {
    UserEntity.validate({ ...this.props, name: value });
    this.props.name = value;
  }

  updatePassword(value: string) {
    UserEntity.validate({ ...this.props, password: value });
    this.props.password = value;
  }

  get name(): string {
    return this.props.name;
  }

  set name(value: string) {
    this.props.name = value;
  }

  get email(): string {
    return this.props.email;
  }

  get password(): string {
    return this.props.password;
  }

  set password(value: string) {
    this.props.password = value;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  static validate(this: void, props: UserProps) {
    const validator = UserValidatorFactory.create();
    const isValid = validator.validate(props);
    if (!isValid) {
      throw new EntityValidationError(validator.errors!);
    }
  }
}
