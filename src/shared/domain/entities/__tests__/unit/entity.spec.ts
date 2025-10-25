import { Entity } from '../../entity';

type StubProps = {
  prop1: string;
  prop2: number;
};

function uuidValidate(uuid: string): boolean {
  const regex =
    /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$/i;
  return regex.test(uuid);
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit test', () => {
  it('Should set props and id', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const entity = new StubEntity(props);

    expect(entity.props).toStrictEqual(props);
    expect(entity.id).not.toBeNull();
    expect(uuidValidate(entity.id)).toBeTruthy();
  });

  it('Should accept a valid uuid', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = '03dd9ee8-7cab-4293-bf45-aae1e5eacd3d';
    const entity = new StubEntity(props, id);

    expect(uuidValidate(entity.id)).toBeTruthy();
    expect(entity.id).toBe(id);
  });

  it('Should convert a entity to a KavaScript Object', () => {
    const props = { prop1: 'value1', prop2: 15 };
    const id = '03dd9ee8-7cab-4293-bf45-aae1e5eacd3d';
    const entity = new StubEntity(props, id);

    expect(entity.toJSON()).toStrictEqual({
      id,
      ...props,
    });
  });
});
