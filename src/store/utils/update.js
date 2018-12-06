const update = (Obj, updatedProperties) => {
  return {
    ...Obj,
    ...updatedProperties
  };
};
export default update;
