import django from "../assets/django.png"
import webdev from "../assets/webDev.jpg"
import rust from "../assets/Rust.png"
import nodejs from "../assets/node js.png"
import hacking from "../assets/hacking.png"
import vue from "../assets/vue js.png"
import go from "../assets/go.png"
import react from "../assets/react img.png"
const categories = [
    {
      name: 'React Basics',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: react,
      video: "https://www.youtube.com/watch?v=SqcY0GlETPk&ab_channel=ProgrammingwithMosh",
      level: 'Basic',
      author: 'Buddhi Raj Gurung',
      rating: 3,
      currentPrice:"$49.99",
      previousPrice: "$79.99",
    },
    {
      name: 'Node.js Essentials',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: nodejs,
          video: "https://www.youtube.com/watch?v=zb3Qk8SG5Ms&list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU&ab_channel=NetNinja",
      level: 'Basic',
      author: 'Buddhi Raj Gurung',
      rating: 5,
      currentPrice: 10000,
      previousPrice: 15000,
    },
    {
      name: 'Full Web Development',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: webdev,
      
      video: "https://www.youtube.com/watch?v=l1EssrLxt7E&list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&ab_channel=ApnaCollege",
      level: 'Basic',
      author: 'Buddhi Raj Gurung',
      rating: 5,
      currentPrice: 10000,
      previousPrice: 15000,
    },
    {
      name: 'Backend with Django',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: django,
          video: "https://www.youtube.com/watch?v=C1NgOmoOszc&list=PLjVLYmrlmjGcyt3m6rt21nfjhYSWP_Ue_&ab_channel=WsCubeTech",
      level: 'Advance',
      author: 'Buddhi Raj Gurung',
      rating: 5,
      currentPrice: 10000,
      previousPrice: 15000,
    },
    {
      name: 'Learn Go',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: go,
      
      video: "https://www.youtube.com/watch?v=etSN4X_fCnM&list=PL4cUxeGkcC9gC88BEo9czgyS72A3doDeM&ab_channel=NetNinja",
      level: 'Advance',
      author: 'Buddhi Raj Gurung',
      rating: 5,
      currentPrice: 10000,
      previousPrice: 15000,
    },
    {
      name: 'Vue.js Essentials',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: vue,
          video: "https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&ab_channel=NetNinja",
      level: 'Advance',
      author: 'Buddhi Raj Gurung',
      rating: 5,
      currentPrice: 10000,
      previousPrice: 15000,
    },
    {
      name: 'Rust Basics',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: rust,
      
      video: "https://www.youtube.com/watch?v=BpPEoZW5IiY&ab_channel=freeCodeCamp.org",
      level: 'Basic',
      author: 'Buddhi Raj Gurung',
      rating: 5,
      currentPrice: 10000,
      previousPrice: 15000,
    },
    {
      name: 'Hacking Essentials',
      description: 'Software developers and engineers create new software-based services and products, while IT profession ........',
      image: hacking,
          video: "https://www.youtube.com/watch?v=yFC8pb2TPdc&list=PLIhvC56v63IIJZRa3lzK6IeBQOH_VFjUQ&ab_channel=NetworkChuck",
      level: 'Basic',
      author: 'Buddhi Raj Gurung',
      rating: 5,
      currentPrice: 10000,
      previousPrice: 15000,
    },
  
  ];
  
  export {categories}