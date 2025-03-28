// src/alluuid.d.ts
declare module 'alluuid' {
    export function uuidv1(): string;
    export function uuidv4(): string;
    export function uuidv7(): string;
    export function generateNilUUID(): string;
    export function generateGuid(): string;
    export function generateMultipleUUIDs(count: number): string[];
    export function generateCustomUUID(options: { namespace: string; name: string }): string;
    export function generateUUIDForEmail(email: string): string;
  
    // Optionally, you can also define more detailed types as per the implementation
    export const uniqueIDGenerator: {
      uuidv1: typeof uuidv1;
      uuidv4: typeof uuidv4;
      uuidv7: typeof uuidv7;
      generateNilUUID: typeof generateNilUUID;
      generateGuid: typeof generateGuid;
      generateMultipleUUIDs: typeof generateMultipleUUIDs;
      generateCustomUUID: typeof generateCustomUUID;
      generateUUIDForEmail: typeof generateUUIDForEmail;
    };
  }
  