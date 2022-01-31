import Block from '../modules/block';
import { Nullable } from '../types';

export default function render(query: string, block: Block): Nullable<Element> {
  const root = document.querySelector(query);

  if (!root) {
    return root;
  }

  // Можно завязаться на реализации вашего класса Block
  root.appendChild(block.getContent());

  block.dispatchComponentDidMount();

  return root;
}
