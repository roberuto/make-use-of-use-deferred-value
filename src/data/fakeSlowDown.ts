export const fakeSlowDown = (renderLag: number) => {
  const now = Date.now();
  while (Date.now() - now < renderLag) {
    // Fake slow render
  }
};
