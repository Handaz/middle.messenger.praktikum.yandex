import Block from '../../modules/block';
import { Nullable } from '../../types';

export default function render(query: string, block: Block): Nullable<Element> {
  const root = document.querySelector(query);
  const element = block.getContent();

  if (!root || !element) {
    return root;
  }

  root.appendChild(element);

  block.dispatchComponentDidMount();

  return root;
}
