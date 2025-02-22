/**
 * Converts a UUID to a base 36 string.
 * This is used to generate the schema name since hyphens from workspace uuid are not allowed in postgres schema names.
 *
 * @param uuid
 * @returns
 */
export function uuidToBase36(uuid: string): string {
  const hexString = uuid.replace(/-/g, '');
  const base10Number = BigInt('0x' + hexString);
  const base36String = base10Number.toString(36);

  return base36String;
}
