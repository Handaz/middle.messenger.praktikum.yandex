import Block from '../../modules/block';
import { Nullable } from '../../types';

export default function remove(query: string, block: Block): Nullable<Element> {
  const root = document.querySelector(query);
  const element = block.getContent();

  if (!root || !element) {
    return root;
  }

  root.removeChild(element);

  block.dispatchComponentDidMount();

  return root;
}
