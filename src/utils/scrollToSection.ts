export const scrollToSection = (sectionId: string) => {
  if (sectionId === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return
  }

const element = document.getElementById(sectionId)

  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};