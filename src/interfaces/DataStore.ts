export interface DataStore {
  getUsers();
  getUserByID(id: string);
  getUserByEmail(email: string);
  addUser(firstname: string, lastname: string, email: string, password: string): Promise<{ firstname: string, lastname: string, email: string, id: string }>;
  updateUser(id: string, name: string);
  deleteUser(id: string);
  getByte(id: string);
  getBytes(userId?: string);
  getTable(id: string): Promise<{ _id: string, hostId: string; members: any; invitations: any; bytes: string[] }>;
  createTable(name: string, hostId: string): Promise<string>;
  inviteUserToTable(tableId: string, email: string): Promise<void>;
  uninviteUserToTable(tableId: string, email: string): Promise<boolean>;
  joinTable(tableId: string, userId: string);
  getByteSection(byteId, sectionId);
  verifyUser(email: string, password: string): Promise<{ authenticated: boolean, firstname: string, lastname: string, email: string, id: string }>;
  completeByte(byteId: string, userId: string): Promise<boolean>;
  getTablesByUser(userId: string);
  getInvitedTables(id: string);
  addByteToTable(tableId: string, byteId: string);
  removeByteFromTable(tableId: string, byteId: string);
  removeUserFromTable(tableId: string, userId: string);
}