import type { Disk } from "./mockDisks";
import type { Project } from "./mockProjects";
import type { User } from "./mockUsers";
import { mockDisks } from "./mockDisks";
import { mockProjects } from "./mockProjects";
import { mockUsers } from "./mockUsers";

// ─── JOIN-функции ───

export const getDiskById = (id: number): Disk | undefined => {
  return mockDisks.find((d) => d.id === id);
};

export const getProjectById = (id: number): Project | undefined => {
  return mockProjects.find((p) => p.id === id);
};

export const getUserById = (id: number): User | undefined => {
  return mockUsers.find((u) => u.id === id);
};

// ─── Расширенные данные (JOIN) ───

export interface DiskWithRelations extends Disk {
  project: Project | undefined;
  receiver: User | undefined;
}

export const getDiskWithRelations = (
  id: number,
): DiskWithRelations | undefined => {
  const disk = getDiskById(id);
  if (!disk) return undefined;

  return {
    ...disk,
    project: getProjectById(disk.projectId),
    receiver: getUserById(disk.receiverId),
  };
};

export const getAllDisksWithRelations = (): DiskWithRelations[] => {
  return mockDisks.map((disk) => ({
    ...disk,
    project: getProjectById(disk.projectId),
    receiver: getUserById(disk.receiverId),
  }));
};

// ─── Фильтры ───

export const getDisksByProject = (projectId: number): Disk[] => {
  return mockDisks.filter((d) => d.projectId === projectId);
};

export const getDisksByReceiver = (receiverId: number): Disk[] => {
  return mockDisks.filter((d) => d.receiverId === receiverId);
};

export const getActiveProjects = (): Project[] => {
  return mockProjects.filter((p) => !p.inArchive);
};

export const getActiveUsers = (): User[] => {
  return mockUsers.filter((u) => !u.isSacked);
};
