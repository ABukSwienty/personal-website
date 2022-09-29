const useNavigateTo = (id: string) => {
  return () => {
    const element = document.getElementById(id);

    if (!element) return;
    console.log(element);
    element.scrollIntoView({ behavior: "smooth" });
  };
};

export default useNavigateTo;
