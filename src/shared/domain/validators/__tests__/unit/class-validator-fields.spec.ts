import { ClassValidatorFields } from '../../class-validator-fields';
import * as libClassValidator from 'class-validator';

class StubClassValidatorFields extends ClassValidatorFields<[field: string]> {}

describe('ClassValidatorFields Unit Tests', () => {
  it('should initialize erros and velidatedData variables woth null', () => {
    const sut = new StubClassValidatorFields();

    expect(sut.errors).toBeNull();
    expect(sut.validatedData).toBeNull();
  });

  it('should validate with errors', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([
      {
        property: 'field',
        constraints: {
          isRequired: 'test error',
        },
      },
    ]);

    const sut = new StubClassValidatorFields();
    expect(sut.validate(null)).toBeFalsy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.errors).toStrictEqual({ field: ['test error'] });
  });

  it('should set validatedData and keep errors as null when data is valid', () => {
    const spyValidateSync = jest.spyOn(libClassValidator, 'validateSync');
    spyValidateSync.mockReturnValue([]);
    const sut = new StubClassValidatorFields();

    expect(sut.validate({ field: 'value' })).toBeTruthy();
    expect(spyValidateSync).toHaveBeenCalled();
    expect(sut.validatedData).toStrictEqual({ field: 'value' });
    expect(sut.errors).toBeNull();
  });
});
