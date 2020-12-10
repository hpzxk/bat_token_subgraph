// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save transfer entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save transfer entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("transfer", id.toString(), this);
  }

  static load(id: string): transfer | null {
    return store.get("transfer", id) as transfer | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get send_Address(): string | null {
    let value = this.get("send_Address");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set send_Address(value: string | null) {
    if (value === null) {
      this.unset("send_Address");
    } else {
      this.set("send_Address", Value.fromString(value as string));
    }
  }

  get receive_Address(): string | null {
    let value = this.get("receive_Address");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set receive_Address(value: string | null) {
    if (value === null) {
      this.unset("receive_Address");
    } else {
      this.set("receive_Address", Value.fromString(value as string));
    }
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}
