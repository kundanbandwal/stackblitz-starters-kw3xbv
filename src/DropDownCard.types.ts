import { Dispatch, SetStateAction } from 'react';

export interface DropdowmCardProps {
  auditor?: boolean;
  children?: React.ReactNode;
  progress?: string;
  title?: string;
  setSelectedSection?: Dispatch<SetStateAction<string>>;
}
