import { ref } from 'vue';

interface Coordinates {
  x: number;
  y: number;
}

export const useMouseMotio = () => {
  const mousePosition = ref<Coordinates>({ x: 0, y: 0 });

  const cumMouseMove = (e: MouseEvent) => {

  const rect = (e.target as HTMLElement).getBoundingClientRect()

    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

      mousePosition.value = {
  x: (centerX - mouseX) * 0.2,
  y: (centerY - mouseY) * 0.2
  }
}


const cumMouseLeave = () => {
  mousePosition.value = {
    x: 0,
    y: 0
  };
};
  return {
     mousePosition ,
     cumMouseMove ,
     cumMouseLeave
}
}
