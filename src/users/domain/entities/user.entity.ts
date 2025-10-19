import { Entity } from '../../../shared/domain/entity';

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
    super(props, id);
    this.props.createdAt = props.createdAt || new Date();
  }

  update(value: string) {
    this.props.name = value;
  }

  updatePassword(password: string) {
    this.props.password = password;
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
}
