function handleShadowClick(e: MouseEvent) {
  const target = e.target as HTMLElement;

  if (target.dataset.shadow) {
    this.setProps({ isModalOpen: false });
  }
}

export default handleShadowClick;
