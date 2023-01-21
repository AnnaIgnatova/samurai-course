import { StoreContext } from ".";

export const Provider = ({ store, children }: any) => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
