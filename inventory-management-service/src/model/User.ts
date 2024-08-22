enum Gender {
  "MALE",
  "FEMALE",
}

export class User {
  private name: string;
  private gender: Gender;
  private phoneNumber: string;
  private pinCode: string;

  constructor(
    name: string,
    gender: Gender,
    phoneNumber: string,
    pinCode: string
  ) {
    this.name = name;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.pinCode = pinCode;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getGender(): Gender {
    return this.gender;
  }

  public setGender(gender: Gender): void {
    this.gender = gender;
  }

  public getPhoneNumber(): string {
    return this.phoneNumber;
  }

  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }

  public getPinCode(): string {
    return this.pinCode;
  }

  public setPinCode(pincode: string): void {
    this.pinCode = pincode;
  }
}
