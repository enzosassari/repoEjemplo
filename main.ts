
class Usuario {
    private nombre: string;
    private edad: number;
  
    constructor(nombre: string, edad: number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    // Método para actualizar el nombre
    actualizarNombre(nuevoNombre: string): void {
      this.nombre = nuevoNombre;
    }
  
    // Método para actualizar la edad
    actualizarEdad(nuevaEdad: number): void {
      if (nuevaEdad > 0) {
        this.edad = nuevaEdad;
      } else {
        console.log("La edad debe ser un número positivo.");
      }
    }
  
    // Método para mostrar detalles del usuario
    mostrarDetalles(): void {
      console.log(`Usuario: ${this.nombre}, Edad: ${this.edad}`);
    }
  }
  
  // Crear una instancia de Usuario
  const usuario1 = new Usuario("Enzo", 29);
  usuario1.mostrarDetalles();
  
  // Actualizar datos del usuario
  usuario1.actualizarNombre("Nicolás");
  usuario1.actualizarEdad(30);
  usuario1.mostrarDetalles();


