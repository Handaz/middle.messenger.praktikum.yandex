import Block from '../../modules/block';
import { BlockProps } from '../../types';

export interface IModal extends BlockProps {
  isModalOpen: boolean;
  content: Block | string;
}
