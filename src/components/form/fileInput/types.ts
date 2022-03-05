import { BlockProps } from '../../../types';

export interface IFileInput extends BlockProps {
  name: string;
  label: string;
  error?: string;
}
