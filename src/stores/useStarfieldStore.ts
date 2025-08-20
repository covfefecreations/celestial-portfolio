import create from 'zustand';
import { Project } from '@/data/types';
import * as THREE from 'three';

interface StarfieldState {
  projects: Project[];
  selectedProject: Project | null;
  cameraTarget: THREE.Vector3;
  isDetailPanelOpen: boolean;
  isHovering: boolean;
  setProjects: (projects: Project[]) => void;
  setSelectedProject: (project: Project | null) => void;
  setCameraTarget: (position: [number, number, number]) => void;
  openDetailPanel: () => void;
  closeDetailPanel: () => void;
  setIsHovering: (hovering: boolean) => void;
}

export const useStarfieldStore = create<StarfieldState>((set) => ({
  projects: [],
  selectedProject: null,
  cameraTarget: new THREE.Vector3(0, 0, 0),
  isDetailPanelOpen: false,
  isHovering: false,
  setProjects: (projects) => set({ projects }),
  setSelectedProject: (project) => set({ selectedProject: project }),
  setCameraTarget: (position) => set({ cameraTarget: new THREE.Vector3(...position) }),
  openDetailPanel: () => set({ isDetailPanelOpen: true }),
  closeDetailPanel: () => set({ selectedProject: null, isDetailPanelOpen: false }),
  setIsHovering: (hovering) => set({ isHovering: hovering }),
}));