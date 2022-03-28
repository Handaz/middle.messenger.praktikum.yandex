import { BlockProps } from '../../../types';

export interface ILabel extends BlockProps {
  label: string;
  name: string;
  regular?: boolean;
  file?: boolean;
}
